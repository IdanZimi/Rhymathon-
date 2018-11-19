import React, { Component } from 'react';
import '../Css/profilePage.css'
import MyPoem from './MyPoem'

class ProfilePage extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        let myUser = JSON.parse(localStorage.getItem("user") || "{}")
        this.setState({ user: myUser })
        console.log(myUser)
    }

    render() {
        
        if (this.state.user.poems[0] === undefined) {
            return (
                <div className="profilepage">
                    <h1>{this.state.user.userName}({this.state.user.firstName} {this.state.user.lastName})</h1>
                    <h4>Poems</h4>
                    <p>You haven't written any poems yet.</p>
                </div>
            )
        }
        else {
            return (
                <div className="profilepage">
                    <h1>{this.state.user.userName}({this.state.user.firstName} {this.state.user.lastName})</h1>
                    <h4>Poems</h4>
                    <p>{this.state.user.poems.map((poem) => {
                        return <MyPoem poem = {poem} />
                    })}</p>    
                </div>
            );
        }
    }
}

export default ProfilePage;