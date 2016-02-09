'use strict';

import React from 'react';
import {render} from 'react-dom';
import Hello from './components/hello';
import Hero from './components/hero';
import Header from './components/header';
import Footer from './components/footer';
import '../scss/main.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Hero />
        <Hello />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
