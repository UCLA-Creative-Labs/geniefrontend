import React from 'react';
import { Route } from 'react-router-dom';

import genie from '../../assets/images/genie.png';
import logo from '../../assets/images/logo.png';
import Button from '../Button';

const NavBar = props => (
  <div className="nav-container">
    <div className="left">
      <div className="logo-container" >
        <img className="logo" alt="genie" src={logo} />
      </div>
      <div className="genie-container">
        <img className="genie-text" alt="genie text" src={genie} />
      </div>
    </div>

    <div className="link-container">
      {props.links.map((link, index) =>
        (<Route
          key={index}
          render={({ history }) => (
            <Button color="primary" medium textOnly label={`${link.text}`} onClick={() => { history.push(`${link.path}`); }} />
          )}
        />))}
    </div>
  </div>
);

export default NavBar;
