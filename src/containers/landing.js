import React from 'react';

import Button from '../components/Button';
import splash from '../assets/images/splash.png';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const onClickNull = () => {};

    return (
      <div className="landing">
        <div className="text-container">
          <h1>genie</h1>
          <p>Genie turns low-fidelity, hand <br /> drawn wireframes into high fideilty <br /> web mockups in an instant.</p>
          <Button rounded large label="Start Designing" secondaryLabel=" - for free" color="primary" onClick={onClickNull} />
        </div>
        <div className="splash-container">
          <img alt="splash" src={splash} />
        </div>
      </div>
    );
  }
}

export default Landing;
