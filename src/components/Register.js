import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';
class Landing extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            firstname: '',
            lastname: ''
        }
    }

    updateState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addUser = async () => {
        if (this.state.username.length < 5) {
            alert('Username must have at least 5 letters')
        }
        else if (this.state.firstname === '') {
            alert('Your firstname must be filled in')
        }
        else if (this.state.lastname === '') {
            alert('Your lastname must be filled in')
        }
        else {
            let newUser = {username:this.state.username, firstname:this.state.firstname, lastname:this.state.lastname}
            let user = await axios.post('http://localhost:4000/userData', newUser)
            localStorage.setItem("user", JSON.stringify([user]))
            window.location.href = "/n/mainPage";
        }
    }

    render() {
        return (
            <div className="back">
                <h4>Register</h4>
                <input type='text' placeholder='Username ' name='username' value={this.state.username} onChange={this.updateState} />
                <input type='text' placeholder='First Name ' name='firstname' value={this.state.firstname} onChange={this.updateState} />
                <input type='text' placeholder='Last Name ' name='lastname' value={this.state.lastname} onChange={this.updateState} />
                <button type='button' onClick={this.addUser}>Register</button>
            </div>
        );
    }
}

export default Landing;