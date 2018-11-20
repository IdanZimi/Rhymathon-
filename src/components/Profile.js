import React, { Component } from 'react';
import '../Css/profilePage.css'
import MyPoem from './UserPoems';
import axios from 'axios';
class ProfilePage extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            index: 0,
            newUrl: '',
            popup: false
        }
    }
    popup = () => {
        this.setState({ popup: !this.state.popup })
    }

    updateText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    nextPoem = () => {
        if (this.state.index === this.state.user.poems.length - 1) {
            return alert("You have reached the last poem.")
        }
        let newIndex = this.state.index + 1
        this.setState({ index: newIndex })
    }
    previousPoem = () => {
        if (this.state.index === 0) {
            return alert("You have reached the first poem.")
        }
        let newIndex = this.state.index - 1
        this.setState({ index: newIndex })
    }

    editPhoto = async () => {
        console.log(this.state.newUrl)
        console.log(this.state.user._id)
        await axios.post('/userData/newImage', { newUrl: this.state.newUrl, userId: this.state.user._id })
        let user = { ...this.state.user }
        user.imageUrl = this.state.newUrl
        this.setState({ user: user })
        localStorage.setItem("user", JSON.stringify(this.state.user))
    }

    componentWillMount() {
        let myUser = JSON.parse(localStorage.getItem("user") || "{}")
        this.setState({ user: myUser })
    }

    render() {
        
        if (this.state.user.poems[0] === undefined) {
            return (
                <div className="profilepage">
                    <img src={this.state.user.imageUrl} className="name image" alt="Profile Picture" />                   
                    <i class="far fa-edit edit" onClick={this.popup}></i>
                    <h3 className="user">{this.state.user.userName}( {this.state.user.firstName} {this.state.user.lastName} )</h3>
                    <h2>Poems:</h2>
                    <p>You haven't written any poems yet.</p>
                    {this.state.popup ?
                        <div>
                            <input className="newUrl" type="text" value={this.state.newUrl} name="newUrl" placeholder="New Image URL..." onChange={this.updateText} />
                            <button type="button" onClick={this.editPhoto} className="buttoni">Send</button>
                        </div>
                        : null}
                </div>
            )
        }
        else {
            return (
                <div className="profilepage">
                    <img src={this.state.user.imageUrl} className="name image" alt="Profile Picture" />
                    <h3 className="user">{this.state.user.userName}( {this.state.user.firstName} {this.state.user.lastName} )</h3>
                    <i class="far fa-edit edit" onClick={this.popup}></i>
                    <h2>Poems:</h2>
                    <MyPoem poem={this.state.user.poems[this.state.index]} key={this.state.user.poems[this.state.index]._id} />
                    {this.state.popup ?
                        <div>
                            <input className="newUrl" type="text" value={this.state.newUrl} name="newUrl" placeholder="New Image URL..." onChange={this.updateText} />
                            <button type="button" onClick={this.editPhoto} className="buttoni">Send</button>
                        </div>
                        : null}
                    <i className="fas fa-angle-left arrow left" onClick={this.previousPoem}></i>
                    <i className="fas fa-angle-right arrow right" onClick={this.nextPoem}></i>
                </div>
            );
        }
    }
}

export default ProfilePage;