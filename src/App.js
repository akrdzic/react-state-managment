import React, { Component } from 'react';
import './App.css';

import Provider from './store';
import Articles from './components/Articles';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Articles />
        </div>
      </Provider>
    );
  }
}

export default App;
