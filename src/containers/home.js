import React from 'react';
import NavBar from '../components/NavBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar links={['Display', 'Home']} />
        <h1>home</h1>
      </div>
    );
  }
}

export default Home;
