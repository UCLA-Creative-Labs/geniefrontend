import React from 'react';
import Webcam from 'react-webcam';

import Button from '../Button';

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      err: false,
    };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState(state => {
      state.image = imageSrc;
    }, ()=>{
      console.log("yuh1", this.state.image);
      this.props.onCapture(this.state.image);
    });
  };


  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <Button onClick={this.capture} label="Capture photo" color="secondary" rounded ghost />
      </div>
    );
  }
}

export default WebcamCapture;