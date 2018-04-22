import React from "react";
import PropTypes from "prop-types";

import { Card, CardDivider, CardSection } from "../../components/foundation/Foundation";

const ProjectCard = ({ title, coverImage, abstract }) => (
  <Card>
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