import React from 'react';
import Dropzone from 'react-dropzone';

class UploadBox extends React.Component{
	constructor(props){
		super(props);
		this.dropHandler = this.dropHandler.bind(this);
		this.readFile = this.readFile.bind(this);
	}

	dropHandler(acceptedFiles, rejectedFiles){
		console.log('hello');
	}

	readFile(e){
		console.log(e);
	}

	render(){

		const dropZoneStyle = {
			display: 'block',
			margin: 'auto',
			border: '4px solid #7b59e8',
			height: '30vw',
			width: '30vw',
			borderRadius: '5%',
			position: 'relative',
			boxShadow: '3px 3px 1px 1px #888888'
		};

		let dropzoneRef;

		return <div>
			<div>
			  <Dropzone ref={(node) => { dropzoneRef = node; }} 
			  	onDrop={ (e) => { this.readFile(e) } }
			  	style={dropZoneStyle}
			  >
			  	<div className="dropzone-heading">
			  		<div>
			  			<p>&uarr;</p>
			  		</div>
			  		<h1>Drop files here.</h1>
			  	</div>
			  </Dropzone>
			  <button className="choose-file" type="button" onClick={() => { dropzoneRef.open() }}>
			      Choose files
			  </button>
			</div>
		</div>
	}
}

export default UploadBox