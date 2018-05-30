import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../components/Button';
import splash from '../assets/images/splash.png';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const onClickNavigate = (path) => {
      this.props.history.push(path);
    };

    return (
      <div className="page-container">
        <div className="page landing">
          <div className="text-container">
            <h1>genie</h1>
            <p>Genie turns low-fidelity, hand <br /> drawn wireframes into high fideilty <br /> web mockups in an instant.</p>
            <Button rounded large ghost label="Start Designing" secondaryLabel=" - for free" color="primary" onClick={() => onClickNavigate('display')} />
          </div>
          <div className="splash-container">
            <img alt="splash" src={splash} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
