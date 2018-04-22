import React from "react";
import PropTypes from "prop-types";

import { Card, CardDivider, CardSection } from "../../components/foundation/Foundation";

const onClick = () => {
  console.log("I clicked, title: ", this.title);
};

const ProjectCard = ({ title, id, coverImage, abstract }) => (
  <div onClick={onClick}>
    <Card>
      <CardDivider>
        <a href={`/portfolio/${id}`}>{title}</a>
      </CardDivider>
      <a href={`/portfolio/${id}`}>
        <img className="thumbnail" src={coverImage} />
      </a>
      <CardSection>
        <p>{abstract}</p>
      </CardSection>
    </Card>
  </div>
);

export default ProjectCard;

ProjectCard.propTypes = {
  abstract: PropTypes.string,
  coverImage: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string
};