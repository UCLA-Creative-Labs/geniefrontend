import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => (
  <div class="heading">
    dog
  </div>
);

Heading.propTypes = {
  color: PropTypes.string.isRequired,
  headingLevel: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Heading;
