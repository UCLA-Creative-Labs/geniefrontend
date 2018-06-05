import React from 'react';

import UploadBox from '../components/UploadBox';
import Card from '../components/Card';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import { getElement } from '../config/config';

import { getStarterFiles } from '../api/api';
import download from 'downloadjs';

import bg from '../assets/images/bg-gradient-2.png';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: null,
      err: false,
    };
    this.setComponents = this.setComponents.bind(this);
    this.getStarterFiles = this.getStarterFiles.bind(this);
  }

  async setComponents(components) {
    this.setState({
      components,
    });
  }

  async getStarterFiles(){
		if(!this.state.components){
			return;
		}
		try{

			const res = await getStarterFiles({
				components: this.state.components
			});

			if(res.err){
				throw new Error(res.err);
			}

			download(res.blob, 'your_genie_app.zip');
		} catch(e){
			this.setState({
				err: e.message
			});
		}
	}

  render() {
    return (
      <div className="page-container">
        <div className="page upload">
            {this.state.components &&
              <div>
              	<div className="components-card">
	                <Card size="small">
	                  {this.state.components.map((component, index) => (
	                    getElement(component, index)
	                  ))}
	                </Card>
                </div>
                <div className="get-starter-files">
                	<Button rounded large ghost color="secondary" onClick={this.getStarterFiles} label="Get my starter files!"/>
                </div>
              </div>
            }

            {!this.state.components &&
             <div className="upload-container">
             	 	<div className="upload-heading">
	                <Heading headingLevel={1} content="Upload your image" />
	                <Paragraph text="Watch your ideas come to life." />
	              </div>
	              <div className="upload-dropzone">
		              <UploadBox className="upload-dropzone" setComponents={this.setComponents} label="Drag files to upload" />
		          	</div>
             </div>
            }
          </div>
          <div className="bg-container">
            <img alt="bg" src={bg} />
          </div>
        </div>
    );
  }
}

export default Upload;
