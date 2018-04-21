import React from "react";
import PropTypes from "prop-types";

import { Card, CardDivider, CardSection } from "../../components/foundation/Foundation";

const style = {
  width: "300px"
};

const ProjectCard = ({ title, coverImage, abstract }) => (
  <Card style={style}>
    <CardDivider>
      <p>{title}</p>
    </CardDivider>
    <img src={coverImage} />
    <CardSection>
      <p>{abstract}</p>
    </CardSection>
  </Card>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string,
  abstract: PropTypes.string,
  coverImage: PropTypes.object
};