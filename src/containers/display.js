import React from 'react';

import { getElement } from '../config/config';
import Card from '../components/Card';
import Button from '../components/Button';
import { getDisplay } from '../api/api.js';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
      err: false,
    };

    this.setComponents = this.setComponents.bind(this);
  }

  componentDidMount() {
  }

  async setComponents() {
    const json = await getDisplay();
    if(json.err){
      this.setState({
        err: json.err,
      })
    } else{
      this.setState({
        components: json.components,
      })
    }
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
        <Button onClick={this.setComponents} color="primary" label="Get Display" />
      </div>
    );
  }
}

export default Display;
