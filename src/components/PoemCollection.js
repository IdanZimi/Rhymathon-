import React, { Component } from 'react';
import '../Css/PoemCollection.css'
import axios from 'axios'
import SinglePoem from './SinglePoem';

class PoemCollection extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            poems: []
        }
    }
    componentDidMount() {
        axios.get('/rhymeData').then((result) => {
            let data = result.data;
            this.setState({ poems: data })
            
        });
    }

    deletePoemState = (id, username) => {
        let poemsArr = this.state.poems.filter((poem) => poem._id !== id)
        this.setState({ poems: poemsArr })
        let user = JSON.parse(localStorage.getItem("user") || "[]")
        if(user.userName === username){
            let userPoemsArr = user.poems.filter((poem) => poem._id !== id)
            user.poems = userPoemsArr
            localStorage.setItem("user", JSON.stringify(user))
        }
    }
    updateSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        console.log(this.state.poems)
        return (
            <div className="backPoemCollections">
                <div className="searchArea">
                    <input className="searchInput" type="text" value={this.state.search} name="search" placeholder="Search..." onChange={this.updateSearch} />
                    <i class="fas fa-search whiteSearch"></i>
                </div>

                {this.state.poems
                    .filter((poem) => {
                        return poem.lyrics.some(line => {
                            if (this.state.search === "") return true
                            return line.text.includes(this.state.search)
                        }) || poem.title.includes(this.state.search)
                    }).map(poem => {
                        return <SinglePoem key={poem._id} poem={poem} deletePoemState={this.deletePoemState} />
                    })

                }
                {/* .map(a=>{
                          return a.text
                     }).includes(this.state.search))
                     .map(poem => {
                         return <SinglePoem key={poem._id} poem={poem} deletePoemState={this.deletePoemState} />
                     }) */}
            </div>
        );
    }
}

export default PoemCollection;