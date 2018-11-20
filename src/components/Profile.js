import React, { Component } from 'react';
import '../Css/profilePage.css'
import MyPoem from './UserPoems';
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
                    <h1 className="name">{this.state.user.userName}({this.state.user.firstName} {this.state.user.lastName})</h1>
                    <p>Poems</p>
                    <p>You haven't written any poems yet.</p>
                </div>
            )
        }
        else {
            return (
                <div className="profilepage">
                    <h1 className="name">{this.state.user.userName}({this.state.user.firstName} {this.state.user.lastName})</h1>
                    <p>Poems</p>
                    <p>{this.state.user.poems.map((poem) => {
                        return <MyPoem poem={poem} />
                    })}</p>
                </div>
            );
        }
    }
}

export default ProfilePage;