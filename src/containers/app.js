import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Display from './display';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/display" component={Display} />
  </div>
);

export default App;
