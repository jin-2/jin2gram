import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component {
    state = {
        username: "",
        password: ""
    };

    render() {
        const { username, password } = this.state;
        return <LoginForm handleSubmit={this._handleSubmit} handleInputChange={this._handleInputChange} usernameValue={username} passwordValue={password} />;
    }

    _handleInputChange = event => {
        const { target : { value, name } } = event;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
}

export default Container;