import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

// ClassName generators

const generateGridContainerClassName = ({ full, fluid }) => {
  const props = [];

  if (full) {
    props.push("full");
  } else if (fluid) {
    props.push("fluid");
  }

  return generateClassName("grid-container", props);
};

const generateCellClassName = ({ small, medium, large, auto, shrink }) => {
  const props = [];

  if (auto) {
    props.push("auto");
  } else if (shrink) {
    props.push("shrink");
  } else {
    if (small) {
      props.push(`small-${small}`);
    }

    if (medium) {
      props.push(`medium-${medium}`);
    }

    if (large) {
      props.push(`large-${large}`);
    }
  }

  return generateClassName("cell", props);
};

const generateRowClassName = ({ margin, collapse }) => {
  const props = [];

  if (margin) {
    props.push("grid-margin-x");
  }

  if (collapse) {
    props.push(`${collapse}-margin-collapse`);
  }

  return generateClassName("grid-x", props);
};

const generateColClassName = ({ margin, collapse }) => {
  const props = [];

  if (margin) {
    props.push("grid-margin-y");
  }

  if (collapse) {
    props.push(`${collapse}-margin-collapse`);
  }

  return generateClassName("grid-y", props);
};

// Component constructors

export const GridContainer = ({ id, style, children, ...props }) => (
  <article id={id || null} style={style|| null} className={generateGridContainerClassName(props)}>{children}</article>
);

export const Cell = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style|| null} className={generateCellClassName(props)}>{children}</div>
);

export const Row = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style|| null} className={generateRowClassName(props)}>{children}</div>
);

export const Col = ({ id, style, children, ...props }) => (
  <div id={id || null} style={style|| null} className={generateColClassName(props)}>{children}</div>
);

export default {
  GridContainer,
  Cell,
  Row,
  Col
};

// PropType validation

GridContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  id: PropTypes.string,
  style: PropTypes.object
};