import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => (
  <div className={`heading heading${props.headingLevel}`}>
    {props.content}
  </div>
);

Heading.propTypes = {
  headingLevel: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Heading;
