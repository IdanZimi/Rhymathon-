import React, { Component } from 'react';
import axios from 'axios'
import '../lines.css'
import Line from './line'


class Poem extends Component {
    constructor(props) {
        super()
        this.state = {
            title: "",
            userName: ""
        }
    }
    
    SaveToData = () => {
        axios.post('http://localhost:4000/rhymeData ', {
            word: this.props.word,
            userName: this.state.userName,
            title: this.state.title,
            lines: this.props.lines

        }).then(res => {
            console.log(res.data);
            // console.log("hey")
        })
    }

    updateText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateLines=(id,value)=>{
        this.props.updateLines(id,value)
    }

    
    render() {
        return (
            <div className="lines">
                <div className="poemline">
                    Title : <input className="input titleAuthorInout" type="text" value={this.state.title} name="title" onChange={this.updateText} />
                    <span className="author">
                        Author : <input className="input titleAuthorInout" type="text" value={this.state.userName} name="userName" onChange={this.updateText} />
                    </span>
                    {this.props.lines.map((line) => {
                        return <Line key={line.id} line={line} updateLines={this.updateLines} />
                    })}

                </div><br />

                <button className="buttonSave" onClick={this.SaveToData} type="button">Save</button>

            </div >
        );
    }
}

export default Poem;