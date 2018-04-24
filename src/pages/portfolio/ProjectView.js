import React from "react";
import PropTypes from "prop-types";

import { OneColumnBody } from "../../components/foundation/Foundation";

import projects from "../../config/projects.json";

const getProject = (projectId) => {
  const result = projects.filter(({ _id }) => _id === projectId);
  return result ? result[0] : null;
};

const Page = ({ children, match }) => {
  const { id, title, abstract, coverImage, description } = getProject(match.params.projectId);

  return (
    <OneColumnBody>
      <div>
        <h4>{title}</h4>
        <img src={coverImage} />
        <p>{description}</p>
      </div>
      {children}
    </OneColumnBody>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  match: PropTypes.object,
  project: PropTypes.object
};