import React, { Component } from 'react';
import '../PoemCollection.css'
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
        axios.get('http://localhost:4000/rhymeData').then((result) => {
            let data = result.data;
            let poems = [...this.state.poems]
            poems.push(data)
            this.setState({ poems: poems })
        });
    }
    updateSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="backPoemCollections">
                <input className="searchInput" type="text" value={this.state.search} name="search" placeholder="word used to bulid song" onChange={this.updateSearch} />
                {this.state.poems
                    .map(poem => {
                        return <SinglePoem key={poem[0]._id} poem={poem} search={this.state.search} />
                    })}
            </div>
        );
    }
}

export default PoemCollection;