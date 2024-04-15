"use client";

import Intro from "@/app/components/Intro";
import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import userData from "@/app/data/data";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Container maxW='6xl' mx='auto'>
        <Intro title={userData.contact.title} />
        <Box py='12'>
          {userData.contact.description.map((eachLine, index) => {
            return (
              <Text key={index} align='center'>
                {eachLine}
              </Text>
            );
          })}
        </Box>
        <Box maxW='2xl' mx='auto' border='1px' borderColor='gray.200' borderRadius='4' padding='6' mb='8'>
          <ContactForm />
        </Box>
      </Container>
    </main>
  );
};

export default Contact;
