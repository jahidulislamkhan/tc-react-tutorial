import React, { Component } from 'react'

export default class First extends Component {
    render() {
        return (
            <div>
                <h2>Name: { this.props.name }</h2>
                <p>Email: { this.props.email }</p>
                <p>Address: { this.props.address }</p>
            </div>
        )
    }
}

