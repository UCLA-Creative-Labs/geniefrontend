import React from 'react';

import UploadBox from '../components/UploadBox';
import Card from '../components/Card';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import { getElement } from '../config/config';

import bg from '../assets/images/bg-gradient-2.png';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: null,
      err: false,
    };
    this.setComponents = this.setComponents.bind(this);
  }

  setComponents(components) {
    this.setState({
      components
    });
  }

  render() {
    if (this.state.components) {
      return (
        <div className="page-container">
          <div className="page components">
            <Card size="medium" >
              {this.state.components.map((component, index) => (
                getElement(component, index)
              ))}
            </Card>
          </div>
        </div>
      );
    }
    return (
      <div className="page-container">
        <div className="page upload">
          <div className="upload-container">
          	<div className="upload-heading">
          		<Heading headingLevel={1} content="Upload your image" />
          		<Paragraph text="Watch your ideas come to life." />
          	</div>
           <div className="upload-dropzone">
           	 <UploadBox className="upload-dropzone" setComponents={this.setComponents} label="Drag files to upload" />
           </div>
          </div>
          <div className="bg-container">
            <img alt="bg" src={bg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
