import React from 'react';

import InstructionRow from '../components/InstructionRow';

import imageLofi from '../assets/images/image-lofi.png';
import hip from '../assets/images/hip.png';
import h1Lofi from '../assets/images/h1-lofi.png';
import h1Hifi from '../assets/images/h1-hifi.png';
import h2Lofi from '../assets/images/h2-lofi.png';
import h2Hifi from '../assets/images/h2-hifi.png';
import h3Lofi from '../assets/images/h3-lofi.png';
import h3Hifi from '../assets/images/h3-hifi.png';
import searchLofi from '../assets/images/search-lofi.png';
import searchHifi from '../assets/images/search-hifi.png';
import stepLofi from '../assets/images/stepper-lofi.png';
import stepHifi from '../assets/images/stepper-hifi.png';


class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const instructionStyles = {
      display: 'flex',
      flexDirection: 'column'
    };

    return (
      <div className="page-container" style={instructionStyles} >
        <InstructionRow textLeft="What you draw" textRight="What it becomes" />
        <InstructionRow imageLeft={imageLofi} imageRight={hip} />
        <InstructionRow textLeft="Headers" />
        <InstructionRow imageLeft={h1Lofi} imageRight={h1Hifi} />
        <InstructionRow imageLeft={h2Lofi} imageRight={h2Hifi} />
        <InstructionRow imageLeft={h3Lofi} imageRight={h3Hifi} />
        <InstructionRow textLeft="Search" />
        <InstructionRow imageLeft={searchLofi} imageRight={searchHifi} />
        <InstructionRow textLeft="Utility" />
        <InstructionRow imageLeft={stepLofi} imageRight={stepHifi} />


      </div>
    );
  }
}

export default Instructions;
