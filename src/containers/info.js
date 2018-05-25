import React from 'react';

import Button from '../components/Button';
import cloud from '../assets/images/cloud.png';
import devices from '../assets/images/devices.png';
import doc from '../assets/images/doc.png';


class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const onClickNull = () => {};

    return (
      <div className="page-container">
        <div className="page info">
          <div className="text-container">
            <h1>How may I help you?</h1>
            <div className="info-container">
              <img src={doc} alt="doc" />
              <div className="info-text">
                <h2>Draw your wireframe</h2>
                <p>Draw a wire with pen and paper.</p>
              </div>
            </div>
            <div className="info-container">
              <img src={cloud} alt="cloud" />
              <div className="info-text">
                <h2>Upload to genie</h2>
                <p>Upload your drawing with a simple photo.</p>
              </div>
            </div>
            <div className="info-container">
              <img src={devices} alt="devices" />
              <div className="info-text">
                <h2>Mockup comes to life</h2>
                <p>Watch as our reactive service brings your ideas to life!</p>
              </div>
            </div>
            <Button rounded large label="Start Designing" color="primary" onClick={onClickNull} />
          </div>
          <div className="example-container">
          
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
