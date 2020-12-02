import React, { Component } from 'react'

const initialState = {
  name: "",
  email: "",
  password: "",
  bio: "",
};

class PostForm extends Component {
    constructor() {
        super()
        this.myForm = React.createRef()
    }
    state = {
        ...initialState
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
        this.myForm.current.reset()
        this.setState({
            ...initialState
        })
    }

    render() {
        return (
            <form ref={ this.myForm } onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="form-control"
                        id="name"
                        value={ this.state.name }
                        onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Valid Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Valid Email"
                        className="form-control"
                        id="email"
                        value={ this.state.email }
                        onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter Your Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        className="form-control"
                        id="password"
                        value={ this.state.password }
                        onChange={ this.changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Enter Your Short Bio</label>
                    <textarea
                        type="text"
                        name="bio"
                        placeholder="Enter Your Short Bio"
                        className="form-control"
                        id="bio"
                        value={ this.state.bio }
                        onChange={ this.changeHandler }
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default PostForm
