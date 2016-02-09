'use strict';

import React from 'react';
import {render} from 'react-dom';
import Hello from './components/hello.jsx';
import Hero from './components/hero.jsx';
require('../css/main.css');

class App extends React.Component {
  render () {
    return (
      <div>
        <Hero />
        <Hello />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
