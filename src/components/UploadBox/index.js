import React from 'react';
import Dropzone from 'react-dropzone';
import Webcam from 'react-webcam';

import WebcamCapture from '../WebcamCapture';
import Button from '../Button';

const fileToBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const res = e.target.result;
    const payload = {
      file: res,
      err: false,
    };
    resolve(payload);
  };
  reader.onerror = () => {
    reader.abort();
    const payload = {
      err: 'Error parsing input file.',
    };
    reject(payload);
  };
});

class UploadBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      err: false,
      acceptedFiles: null,
      rejectedFiles: null,
      webcam: false,
    };
    this.readFile = this.readFile.bind(this);
    this.initWebcam = this.initWebcam.bind(this);
    this.handleWebcamImage = this.handleWebcamImage.bind(this);
  }

  async readFile(acceptedFiles, rejectedFiles){
		try{
			const data = await fileToBase64(acceptedFiles[0]);

			if(data.err){
				throw new Error(data.err);
			}

			this.props.setUploadState({
				uploadedImage: data.file,
			}, this.props.sendFile);
		} catch(e){
			this.setState({
				err: e.message
			})
		}
	}

  async initWebcam() {
    this.setState({
      webcam: true,
    });
  }

  async handleWebcamImage(base64String) {
    this.setState((state) => {
      state.file = base64String;
      state.webcam = false;
    }, () => {
      this.props.setUploadState({
      	uploadedImage: base64String,
      }, this.props.sendFile)
	 	});
  }

  render() {
    const dropZoneStyle = {
      display: 'block',
      margin: 'auto',
      border: '4px solid #7b59e8',
      borderRadius: '5%',
      position: 'relative',
      boxShadow: '0px 2px 15px 3px #888888',
      height: '25vw',
      width: '25vw',
      minWidth: '250px',
      minHeight: '250px',
      marginBottom: '30px',
      backgroundColor: '#FCFCFF',
    };

    let dropzoneRef;

    return (<div>
      <div>
        {!this.state.webcam &&
			 	<div>
			 	  <Dropzone
			 	    ref={(node) => { dropzoneRef = node; }}
			 	    accept="image/jpeg, image/png, image/jpg"
  					style={dropZoneStyle}
  					onDropAccepted={this.readFile}
			 		>
			 	    {({
			 	      isDragActive, isDragReject, acceptedFiles, rejectedFiles
			 	    }) => {
			  		let label = 'Drop an image!';

				    if (isDragActive) {
				      label = 'This file is authorized';
				    } else if (isDragReject) {
				      label = 'This file is not authorized';
				    }

				    if (rejectedFiles.length) {
				    	label = 'Not a valid file format';
				    } else if (acceptedFiles.length) {
				    	label = 'Successfully uploaded!';
				    }

				    return (
			 	        <div className="dropzone-heading">
			 	          <div>
			 	            <p>&uarr;</p>
			 	          </div>
			 	          <h1>{label}</h1>
			 	        </div>);
			 	    }}
     			</Dropzone>
			 	  <Button rounded large ghost color="secondary" onClick={() => { dropzoneRef.open(); }} label="Choose a file" style={{marginBottom: '5px'}} />
			 	  <Button rounded large ghost color="secondary" onClick={() => this.initWebcam()} label="Use your webcam" />
			 	</div>
        }
        {this.state.webcam &&
					<div className="webcam-container">
					  <WebcamCapture onCapture={this.handleWebcamImage} />
					</div>
        }

        <span className="upload-err">
          { this.state.err ? this.state.err : '' }
        </span>
      </div>
    </div>);
  }
}

export default UploadBox;
