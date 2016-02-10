'use strict';

// CSS
import '../scss/main.scss';

// JS
import React from 'react';
import {render} from 'react-dom';
import Hello from './components/hello';
import Hero from './components/hero';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Header />
        <Hero />
        <Hello name="Jeff" />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
