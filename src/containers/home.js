import React from 'react';
import NavBar from '../components/NavBar';
import Landing from './landing';
import Info from './info';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };

    this.setLinks = this.setLinks.bind(this);
  }

  componentDidMount() {
    this.setLinks();
  }

  async setLinks() {
    this.setState({
      links: [{ text: 'instructions', path: '/instructions' }, { text: 'display', path: '/display' }]
    });
  }

  render() {
    return (
      <div>
        <NavBar links={this.state.links} />
        <Landing />
        <Info />
      </div>
    );
  }
}

export default Home;
