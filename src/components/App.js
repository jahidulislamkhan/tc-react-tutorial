import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    let style = {
      fontSize: '30px',
      fontFamily: 'Arial',
      color: 'white',
      textAlign: 'center'
    }
    return (
      <div className="App">
        <h1 style={ style }>CSS has been implemented here</h1>
      </div>
    );
  }
}

export default App;
