import React from 'react';

import COMPONENTS, { getElement } from '../config/config';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
    };

    this.setComponents = this.setComponents.bind(this);
  }

  componentDidMount() {
    this.setComponents();
  }

  async setComponents() {
    this.setState({
      components: COMPONENTS,
    });
  }

  render() {
    return (
      <div className="display">
        {this.state.components.map((component, index) => (
          getElement(component, index)
        ))}
      </div>
    );
  }
}

export default Display;
