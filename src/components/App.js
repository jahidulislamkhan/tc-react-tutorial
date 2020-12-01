import React, { Component } from 'react';
import Books from './Books/Books';

class App extends Component {

  state = {
    books: [
      {
        id: 1,
        name: 'Javascript',
        price: 20
      },
      {
        id: 2,
        name: 'React',
        price: 29
      },
      {
        id: 3,
        name: 'Redux',
        price: 33
      },
      {
        id: 4,
        name: 'React Native',
        price: 25
      }
    ]
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
      books: newBooks
    })
  }

  editHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          name
        }
      }
      return book
    })
    this.setState({
      books: newBooks
    })
  }

  render() {
    return (
      <div className="App">
        <Books deleteHandler={ this.deleteHandler.bind(this) } editHandler={ this.editHandler.bind(this) } books={ this.state.books } />
      </div>
    );
  }
}

export default App;
