import { useForm } from "react-hook-form";
import React from "react";
import { FormErrorMessage, FormLabel, FormControl, Input, Textarea, Button } from "@chakra-ui/react";
import FormData from "../types/FormData";

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData: FormData) => {
    console.log("formdata", formData);

    console.log("sumbit???: ", isSubmitting);
    // setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    }
    // finally {
    //     setIsSubmitting(false);
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name} pb='4'>
        <FormLabel htmlFor='name'>Name</FormLabel>
        <Input
          id='name'
          placeholder='Name'
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email} pb='4'>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          type='email'
          placeholder='Email'
          {...register("email", {
            required: "This is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.message} pb='4'>
        <FormLabel htmlFor='message'>Message</FormLabel>
        <Textarea
          id='message'
          placeholder='Message'
          {...register("message", {
            required: "This is required",
            minLength: { value: 10, message: "Minimum length should be 10" },
          })}
        />
        <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  );
}
