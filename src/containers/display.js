import React from "react";

import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const onClickNull =
			() => {}

		return (
			<div className="display">
				<Button label="hello" color="primary" onClick={onClickNull} />
				<SearchBar/>
			</div>
		);
	}
}


export default Display;
