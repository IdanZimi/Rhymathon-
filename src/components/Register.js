import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../Css/App.css'
import axios from 'axios';
import '../Css/register.css'

class Landing extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            image: ''
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
            let newUser = { username: this.state.username, firstname: this.state.firstname, lastname: this.state.lastname, imageUrl: this.state.image }
            let user = await axios.post('/userData', newUser)
            localStorage.setItem("user", JSON.stringify(user.data))
            window.location.href = "/n/mainPage";
        }
    }

    render() {
        return (

            <div className="outterPop back">
                <div className="pop-up">
                <h4 className="registerTitle">Register</h4>
                    <Link to="/"><i class="fas fa-arrow-left amiti"></i></Link>
                    <input type='text' placeholder='Username ' className="userInput" name='username' value={this.state.username} onChange={this.updateState} />
                    <input type='text' placeholder='First Name ' className="nameInput" name='firstname' value={this.state.firstname} onChange={this.updateState} />
                    <input type='text' placeholder='Last Name ' className="lastnameInput" name='lastname' value={this.state.lastname} onChange={this.updateState} />
                    <input type='text' placeholder='Image URL' className="imageInput" name='image' value={this.state.image} onChange={this.updateState} />
                    <button type='button' className="btn bttn btn-secondary btn-bg btn-block button regButton" onClick={this.addUser}><span>Register</span></button>
                </div>
            </div>
        );
    }
}

export default Landing;