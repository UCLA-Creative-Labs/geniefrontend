import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../components/Button';
import ButtonBar from '../components/ButtonBar';
import Image from '../components/Image';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Paragraph from '../components/Paragraph';

import cloud from '../assets/images/cloud.png';
import devices from '../assets/images/devices.png';
import doc from '../assets/images/doc.png';


class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const onClickNavigate = (path) => {
      this.props.history.push(path);
    };

    const onClickNull = () => {};

    return (
      <div className="page-container" id="about">
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
            <Button rounded large label="Start Designing" color="primary" onClick={() => onClickNavigate('upload')} />
          </div>
          <div className="example-container">
            <Card size="small">
              <Heading center content="genie" headingLevel={2} />
              <Image />
              <Heading content="Learn" headingLevel={3} />
              <Paragraph />
              <ButtonBar label="title" buttonLabel="clicky" buttonColor="primary" onClick={onClickNull} />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Info);
