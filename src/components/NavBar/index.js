import React from 'react';
import { Route } from 'react-router-dom';

import genie from '../../assets/images/genie.png';
import genietext from '../../assets/images/genie-text.png';
import Heading from '../Heading';
import Button from '../Button';

const NavBar = props => (
  <div className="nav-container">
    <div className="left">
      <img className="genie" alt="genie" src={genie} />
      <img className="genie-text" alt="genie text" src={genietext} />
    </div>

    <div className="link-container">
      <div className="links">
        {props.links.map((link) =>
          <Route render={({ history }) => (
            <Button type='button' color="primary" label={`${link}`} onClick={() => { history.push(`/${link}`) }} />
          )} />
        )}
      </div>
    </div>
  </div>
);

export default NavBar;
