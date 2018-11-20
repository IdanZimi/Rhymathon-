import React, { Component } from 'react';
import '../Css/App.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../Css/login.css'


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
        let user = await axios.get('/userData/'+this.state.username)
        if (user.data[0] == undefined) {
            alert("User not found.")
        }
        else {
            localStorage.setItem("user", JSON.stringify(user.data[0]))
            window.location.href = "/n/mainPage";
        }
    }

  render() {
    return (
      <div>
        <input type='text' className="loginInput" placeholder='Username here' name='username' value={this.state.username} onChange={this.updateState} />
        <button type='button' className="loginButton btn bttn btn-secondary btn-bg btn-block button" onClick={this.getUser}><span className='enterSpan'>Login </span></button><br/>
        <Link to="/register" className="registerLink"> Register</Link>
      </div>
    );
  }
}

export default Login;