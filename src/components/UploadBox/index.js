import React from 'react';
import Dropzone from 'react-dropzone';
import Button from '../Button';
import { sendFile } from '../../api/api';

const fileToBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
	   	reader.readAsDataURL(file);
	   	reader.onload = (e) => {
	   		const res = e.target.result;
	   		const payload = {
	   			file: res,
	   			err: false,
	   		};
	   		resolve(payload);
	   	}
	   	reader.onerror = () => {
	   		reader.abort();
	   		const payload = {
	   			err: "Error parsing input file.",
	   		};
	   		reject(payload);
	   	}
	})
}

class UploadBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			file: null,
			err: false,
		};
		this.readFile = this.readFile.bind(this);
	}

	async readFile(acceptedFiles, rejectedFiles){
		try{
			const data = await fileToBase64(acceptedFiles[0]);

			if(data.err){
				throw new Error(data.err);
			}

			const res = await sendFile({
				file: data.file
			});

			if(res.err){
				this.setState({
					err: res.err
				});
			} else{
				this.props.setComponents(res.components);
			}
		} catch(e){
			return{
				err: e.messsage
			}
		}
	}

	render(){
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
		};

		let dropzoneRef;

		return <div>
			<div>
			  <Dropzone ref={(node) => { dropzoneRef = node; }} 
			  	accept="image/jpeg, image/png, image/jpg"
			  	style={dropZoneStyle}
			  	onDropAccepted={this.readFile}
			  >
			  	{({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
			  		let label = "Drop an image!";

				    if(isDragActive) {
				      label = "This file is authorized";
				    }
				    else if(isDragReject) {
				      label = "This file is not authorized";
				    }

				    if(rejectedFiles.length){
				    	label = "Not a valid file format"
				    }
				    else if(acceptedFiles.length){
				    	label = "Successfully uploaded!"
				    }

				    return <div className="dropzone-heading">
				  		<div>
				  			<p>&uarr;</p>
				  		</div>
				  		<h1>{label}</h1>
				  	</div>
				}}
			  </Dropzone>
			  <Button rounded large ghost color="primary" onClick={() => { dropzoneRef.open() }} label="Choose a file"/>
			  <span className="upload-err">
			  	{ this.state.err ? this.state.err : '' }
			  </span>
			</div>
		</div>
	}
}

export default UploadBox