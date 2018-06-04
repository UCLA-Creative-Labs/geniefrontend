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
        <div className="divider">
          <p>Go from drawn mockups to code in minutes.</p>
        </div>
        <Info />
      </div>
    );
  }
}

export default Home;
