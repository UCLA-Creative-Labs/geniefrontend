import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Display from './display';
import Upload from './upload';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/display" component={Display} />
    <Route exact path="/upload" component={Upload} />
  </div>
);

export default App;
