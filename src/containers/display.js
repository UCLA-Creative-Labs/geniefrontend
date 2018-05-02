import React from 'react';

import Button from '../components/Button';
import COMPONENTS from '../config/config';

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
    const onClickNull
      = () => {};

    const getElement = (s, i) => {
      let result;
      switch (s) {
        case 'Button':
          result = <Button key={i} label="button" color="primary" onClick={onClickNull} />;
          break;
        case 'Card':
          result = <Button key={i} label="card" color="primary" onClick={onClickNull} />;
          break;
        default:
          result = <Button key={i} label="default" color="primary" onClick={onClickNull} />;
          break;
      }

      return result;
    };

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
