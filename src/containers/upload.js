import React from 'react';

import UploadBox from '../components/UploadBox';
import Card from '../components/Card';
import { getElement } from '../config/config';

class Upload extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			components: null,
			err: false,
		}
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
            <UploadBox setComponents={this.setComponents} label="Drag files to upload" />
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
