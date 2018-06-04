import React from 'react';

import Landing from './landing';
import Info from './info';

import divider from '../assets/images/divider.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Landing />
        <img src={divider} alt="divider" style={{ width: '100%', }} />
        <Info />
      </div>
    );
  }
}

export default Home;
