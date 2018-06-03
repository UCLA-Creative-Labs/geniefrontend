import React from 'react';
import NavBar from '../components/NavBar';
import Landing from './landing';
import Info from './info';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Landing />
        <Info />
      </div>
    );
  }
}

export default Home;
