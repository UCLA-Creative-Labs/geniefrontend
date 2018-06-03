import React from 'react';

import Button from '../components/Button';
import UploadBox from '../components/UploadBox';

class Upload extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return <div className="page-container">
			<div className="page upload">
				<div className="upload-container">
					<UploadBox label="Drag files to upload" />
				</div>
			</div>
		</div>
	}
}

export default Upload 