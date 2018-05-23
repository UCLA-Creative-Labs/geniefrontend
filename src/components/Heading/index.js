import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => (
  <div className={`heading heading${props.headingLevel}`}>
    <h1 className={`heading${props.headingLevel}`}>{props.content}</h1>
  </div>
);

Heading.propTypes = {
  headingLevel: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Heading;
