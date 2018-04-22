import React from "react";

import { Callout, Col, Row, Cell, GridContainer } from "../../components/foundation/Foundation";

import ContactForm from "../../components/ContactForm";

import ProjectCard from "./ProjectCard";

import projects from "../../config/projects.json";

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

const blockGridCellStyle = {
  width: "300px"
};

const onSubmit = () => {

};

const Main = () => (
  <Col>
    <Cell>
      <Callout>
        <span>Stuff I have done</span>
      </Callout>
    </Cell>
    <Cell>
      <GridContainer>
        <Row small={1} medium={2} large={4} margin>
          {projects.map(({ title, coverImage, abstract }, index) => (
            <Cell key={index} style={blockGridCellStyle}>
              <ProjectCard title={title} coverImage={coverImage} abstract={abstract} />
            </Cell>
          ))}
        </Row>
      </GridContainer>
    </Cell>
    <Cell>
      <hr />
      <p>Some contact info or the like</p>
      <ContactForm _id="portfolioContactForm" labels={contactFormLabels} placeholders={contactFormPlaceholders} submitAction={onSubmit} />
    </Cell>
  </Col>
);

export default Main;