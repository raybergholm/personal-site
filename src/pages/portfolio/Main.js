import React from "react";

import { Callout, Col, Cell } from "../../components/foundation/Foundation";

import ContactForm from "../../components/ContactForm";

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

const Main = () => (
  <Col>
    <Cell>
      <Callout>
        <span>Stuff I have done</span>
      </Callout>
    </Cell>
    <Cell>
      <p>This is the main section</p>
    </Cell>
    <Cell>
      <hr />
      <p>Some contact info or the like</p>
      <ContactForm labels={contactFormLabels} placeholders={contactFormPlaceholders} />
    </Cell>
  </Col>
);

export default Main;