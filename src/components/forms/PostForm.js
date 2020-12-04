import React, { Component } from 'react'

const initialState = {
  name: "",
  email: "",
  password: "",
  bio: "",
  country: "",
  gender: "",
  skills: []
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
        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            } else {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== event.target.value)
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
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
          <form ref={this.myForm} onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Enter Your Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.changeHandler}
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
                value={this.state.email}
                onChange={this.changeHandler}
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
                value={this.state.password}
                onChange={this.changeHandler}
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
                value={this.state.bio}
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Country">Select Your Country</label>
              <select onChange={ this.changeHandler } name="country" id="country" className="form-control">
                  <option> Select a Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Syria">Syria</option>
                  <option value="Indonesia">Indonesia</option>
              </select>
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } className="form-check-input" type="radio" name="gender" id="gender1" value="Male" />
                    <label className="form-check-label" htmlFor="gender1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } className="form-check-input" type="radio" name="gender" id="gender2" value="Female" />
                    <label className="form-check-label" htmlFor="gender2">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } className="form-check-input" type="radio" name="gender" id="gender3" value="Others" />
                    <label className="form-check-label" htmlFor="gender3">Others</label>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } name="skill" className="form-check-input" type="checkbox" id="js" value="Javascript" />
                    <label className="form-check-label" htmlFor="js">Javascript</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } name="skill" className="form-check-input" type="checkbox" id="React" value="ReactJS" />
                    <label className="form-check-label" htmlFor="react">ReactJS</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } name="skill" className="form-check-input" type="checkbox" id="angular" value="AngularJS" />
                    <label className="form-check-label" htmlFor="angular">AngularJS</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={ this.changeHandler } name="skill" className="form-check-input" type="checkbox" id="node" value="NodeJS" />
                    <label className="form-check-label" htmlFor="node">NodeJS</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        );
    }
}

export default PostForm
