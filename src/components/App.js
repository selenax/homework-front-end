import React, { Component } from 'react';

import '../App.css';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
      </div>
    );
  }
}

export default App;
