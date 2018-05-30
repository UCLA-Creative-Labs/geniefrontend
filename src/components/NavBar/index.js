import React from 'react';
import { Route } from 'react-router-dom';

import genie from '../../assets/images/genie.png';
import genietext from '../../assets/images/genie-text.png';
import Button from '../Button';

const NavBar = props => (
  <div className="nav-container">
    <div className="left">
      <img className="genie" alt="genie" src={genie} />
      <img className="genie-text" alt="genie text" src={genietext} />
    </div>

    <div className="link-container">
      {props.links.map((link, index) =>
        <Route key={index} render={({ history }) => (
          <Button type='button' color="primary" ghost rounded label={`${link}`} onClick={() => { history.push(`/${link}`) }} />
        )} />
      )}
    </div>
  </div>
);

export default NavBar;
