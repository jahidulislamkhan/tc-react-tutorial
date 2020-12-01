import React, { Component } from 'react'

class Book extends Component {
  state = {
    isEditable: false
  }

  updateHandler = e => {
    if (e.key == 'Enter') {
      this.setState({ isEditable: false })
    }
  }

  render() {
    let output = this.state.isEditable ? (
      <input type="text"
        onChange={ e => this.props.editHandler(e.target.value, this.props.book.id) }
        onKeyPress={ this.updateHandler }
        value={this.props.book.name} className="form-input"
      />
    ) : (
      <p>{this.props.book.name}</p>
    );

    return (
      <li className="list-group-item d-flex">
        { output }
        <span className="ml-auto">${this.props.book.price}</span>
        <div className="mx-4">
          <span style={{ cursor: "pointer" }} onClick={ () => this.setState({ isEditable: true }) } className='mx-2'>
            <i className="fas fa-edit"></i>
          </span>
          <span style={{ cursor: "pointer" }} onClick={ () =>  this.props.deleteHandler(this.props.book.id) }>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default Book
