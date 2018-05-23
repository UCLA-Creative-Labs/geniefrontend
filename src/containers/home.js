import React from 'react';

import Landing from './landing';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

export default Home;
