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
import phone from '../assets/images/iphone.png';
import arrow from '../assets/images/arrow.png';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // components: ['SearchBar','h1', 'Image', 'Paragraph'],
      components: null,
      err: false,
      uploadedImage: null
    };
    this.setComponents = this.setComponents.bind(this);
    this.getStarterFiles = this.getStarterFiles.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  async setComponents(components) {
    this.setState({
      components: components,
    });
  }

  setImage(image){
  	this.setState({
  		uploadedImage: image
  	})
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
            		<div className="components-container">
	              	<div className="mockup">
	              		<Heading headingLevel={1} content="What you drew" />
	              		<img src={this.state.uploadedImage}/>
	              	</div>
	              	<div className="arrow">
	              		<img src={arrow} />
	              	</div>
	              	<div className="components-card-phone">
	              		<img className="phone" alt="phone" src={phone} />
		                <Card size="small">
		                  {this.state.components.map((component, index) => (
		                    getElement(component, index)
		                  ))}
		                </Card>
	                </div>
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
		              <UploadBox className="upload-dropzone" setComponents={this.setComponents} setImage={this.setImage} label="Drag files to upload" />
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
