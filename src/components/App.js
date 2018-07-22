import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AddCity from '../containers/AddCity'
import AddCitiesList from '../containers/AddCitiesList'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddCity/>
        <AddCitiesList/>
      </div>
    );
  }
}

export default App;
