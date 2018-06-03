import React from 'react';

import Heading from '../Heading';

const InstructionRow = props => (
  <div className="instructionRow">
    <div className="left">
      {props.imageLeft &&
        <div className="image-container">
          <img src={props.imageLeft} alt="wireframe" />
        </div>
      }
      {props.textLeft &&
        <div className="text-container">
          <Heading headingLevel={2} content={props.textLeft} />
        </div>
      }
    </div>
    <div className="right">
      {props.imageRight &&
        <div className="image-container">
          <img src={props.imageRight} alt="mockup" />
        </div>
      }
      {props.textRight &&
        <div className="text-container">
          <Heading headingLevel={2} content={props.textRight} />
        </div>
      }
    </div>
  </div>
);

export default InstructionRow;
