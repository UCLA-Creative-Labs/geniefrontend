import React from 'react';

import COMPONENTS, { getElement } from '../config/config';
import Card from '../components/Card';

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
    const displayStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '5rem'
    };

    return (
      <div className="display" style={displayStyle}>
        <Card>
          {this.state.components.map((component, index) => (
            getElement(component, index)
          ))}
        </Card>
      </div>
    );
  }
}

export default Display;
