import React, { Component } from 'react';
import './App.css';
import First from './First/First';

class App extends Component {

  state = {
    name: ''
  }

  inputHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container my-3">
          <input type="text" onChange={ this.inputHandler } value={ this.state.name } className="form-input"/>&nbsp;
          <button onClick={ (e) => console.log(e.target) } className="btn btn-primary">
            Click Here
          </button>
          { this.state.name ? <p className="text-success">Hello { this.state.name }!</p> : '' }
        </div>
      </div>
    );
  }
}

export default App;
