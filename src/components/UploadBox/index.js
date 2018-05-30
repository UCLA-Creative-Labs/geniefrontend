import React from 'react';

class UploadBox extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <form class="box" method="post" action="" enctype="multipart/form-data">
		  <div class="box__input">
		    <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
		    <label for="file"><strong>{this.props.label}</strong><span class="box__dragndrop"> or drag it here</span>.</label>
		    <button class="box__button" type="submit">Upload</button>
		  </div>
		  <div class="box__uploading">Uploading&hellip;</div>
		  <div class="box__success">Done!</div>
		  <div class="box__error">Error! <span></span>.</div>
		</form>
	}
}

export default UploadBox