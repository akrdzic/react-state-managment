import React, { Component } from 'react';
import './App.css';

import Provider from './store';
import Articles from './components/Articles';
import EmployeesList from "./components/EmployeesList";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Articles />
          <EmployeesList />
        </div>
      </Provider>
    );
  }
}

export default App;
