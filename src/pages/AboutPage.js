import React from "react";

import OneColumnBody from "../components/layout/OneColumnBody";

import ContactLinks from "./ContactLinks";
import ContactForm from "../components/ContactForm";

const contactFormLabels = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
  buttonText: "Submit"
};

const contactFormPlaceholders = {
  name: "Your name...",
  email: "Your email...",
  subject: "Your subject...",
  message: "Your message..."
};

const onSubmit = () => {

};

const Page = () => (
  <OneColumnBody>
    
    <p>I am the about page</p>

    <ContactLinks />
    <ContactForm _id="portfolioContactForm" labels={contactFormLabels} placeholders={contactFormPlaceholders} submitAction={onSubmit} />
  </OneColumnBody>
);

export default Page;