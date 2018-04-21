import React from "react";

import { Col, Cell } from "../../components/foundation/Foundation";

import profilePicture from "../../images/segovia_zoomed.jpg";

import ContactLinks from "../ContactLinks";

const colStyle = {
  "background-color": "#F0F0F0"
};

const blurb = [
  "I'm a software developer from the UK living in Helsinki, Finland. I've had many years of experience in full-stack development in industries ranging from business IT consulting, logistics, mobile gaming and digital content publishing.",
  "Nowadays I work on React web apps, cloud computing on AWS and systems integrations and architecture. I'm a proponent of Agile development, and have experience as a Scrum Master",
  "In my spare time, I'm a nerd for Latin pair dance and a psychology enthusiast."
];

const Side = () => (
  <Col style={colStyle} padding>
    <Cell shrink>
      <img className="thumbnail" src={profilePicture} />
    </Cell>
    <Cell>
      <h5><strong>Ray Bergholm</strong></h5>
      {blurb.map((section, index) => (<p key={index}>{section}</p>))}
    </Cell>
    <ContactLinks />
  </Col>
);

export default Side;