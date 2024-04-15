import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "";

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY || "" });

    mg.messages
      .create(MAILGUN_DOMAIN, {
        from: `Contact Form <no-reply@${MAILGUN_DOMAIN}>`,
        to: ["mooshkid@gmail.com"],
        subject: "New Contact Form!",
        text: `Hi,
        You have a new contact form submission!
        
        Name: ${name}
        Email: ${email}
        Message: ${message}`,
        // html: "<h1>Testing some Mailgun awesomeness!</h1>",
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)); // logs any error

    // Example logic: Send email
    // Replace this with your actual logic for sending emails
    // For demonstration purposes, we'll send a simple response back
    console.log("Received form submission:", { name, email, message });

    // Send a response back to the client
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
