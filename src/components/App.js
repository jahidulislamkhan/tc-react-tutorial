import React, { Component } from 'react';
import './App.css';
import First from './First/First';

class App extends Component {
  state = {
    persons: [
      { name:"John Doe", email:"john@mail.com", address:"Dhanmondi, Dhaka" },
      { name:"Kevin Smith", email:"kevin@mail.com", address:"Banani, Dhaka" },
      { name:"Bratt Lee", email:"lee@mail.com", address:"Sydeny, Australia" }
    ]
  };
  render() {
    return (
      <div className="App">
        { this.state.persons.map((person, index) => {
          return <First
                  key={ index }
                  name={ person.name }
                  email={ person.email }
                  address={ person.address }
                />
        })}
      </div>
    );
  }
}

export default App;
