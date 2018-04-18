import React from "react";
import PropTypes from "prop-types";

import { GridContainer, Row, Cell } from "../components/foundation/Foundation";

const ContactForm = ({ _id, labels, placeholders, buttonClickAction }) => (
  <GridContainer id={`contactform-${_id}`}>
    <Row>
      <Cell medium={6}>
        <label>
          {labels.name}
          <input id={`contactform-${_id}-name`} type="text" placeholder={placeholders.name} />
        </label>
      </Cell>
      <Cell medium={6}>
        <label>
          {labels.email}
          <input id={`contactform-${_id}-email`} type="text" placeholder={placeholders.email} />
        </label>
      </Cell>
    </Row>
    <label>
      {labels.subject}
      <input id={`contactform-${_id}-Subject`} type="text" placeholder={placeholders.subject} />
    </label>
    <label>
      {labels.message}
      <textarea placeholder={placeholders.message}></textarea>
    </label>
    <hr />
    <button className="button" onClick={buttonClickAction}>{labels.buttonText}</button>
  </GridContainer>
);

ContactForm.propTypes = {
  _id: PropTypes.string.isRequired,
  buttonClickAction: PropTypes.func,
  labels: PropTypes.object,
  placeholders: PropTypes.object
};

export default ContactForm;