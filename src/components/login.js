import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios';


class Login extends Component {

    constructor(){
        super()
        this.state={
            username : ''
        }
    }

    updateState=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    getUser=async()=>{
        let user = await axios.get('http://localhost:4000/userData/'+this.state.username)
        if (user[0] == undefined) {
            alert("User not found.")
        }
        else {
            localStorage.setItem("user", JSON.stringify(user))
            window.location.href = "/n/mainPage";
        }
    }

  render() {
    return (
      <div className="back">
        <h4>Login</h4>
        <input type='text' placeholder='Username here' name='username' value={this.state.username} onChange={this.updateState} />
        <button type='button' onClick={this.getUser}>Login</button>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;