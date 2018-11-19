import React, { Component } from 'react';
import axios from 'axios'
import '../lines.css'
import Line from './line'


class Poem extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            title: ""

        }
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user") || "[]")
        this.setState({ user: user })
    }

    updateRadio = (value, id) => {
        this.props.updateRadio(value, id)
    }
    updateRadio = (id) => {
        this.props.updateRadio(id)
    }

    SaveToData = () => {
        axios.post('http://localhost:4000/rhymeData ', {
            word: this.props.word,
            userName: this.state.user.userName,
            title: this.state.title,
            lines: this.props.lines,
            userId: this.state.user._id
        }).then((res) => {
            console.log(res.data);
            this.props.removePoem()
            let user = { ...this.state.user }
            user.poems.push(res.data)
            this.setState({ user: user })
            localStorage.setItem("user", JSON.stringify(this.state.user))
            alert('Your poem has been saved')
        })
    }

    updateText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateLines = (id, value) => {
        this.props.updateLines(id, value)
    }

    addLine = () => {
        this.props.addLine()
    }
    moveDown = () => {
        this.props.moveDown()
    }
    moveUp = () => {
        this.props.moveUp()
    }

    render() {
        return (
            <div>
                <div className="lines">
                    <div className="titleLine">
                        <button onClick={this.moveUp}><i class="fas fa-angle-up up"></i></button>
                        <button onClick={this.moveDown}><i class="fas fa-angle-down down"></i></button>
                        Title : <input className="input titleAuthorInout" type="text" value={this.state.title} name="title" onChange={this.updateText} />
                        <span className="author">
                            Author : <input className="input titleAuthorInout" type="text" value={this.state.user.userName} name="userName" />
                        </span>

                    </div>
                    <div className="poemline">
                        {this.props.lines.map((line) => {
                            return <Line
                                key={line.id}
                                line={line}
                                updateLines={this.updateLines}
                                updateRadio={this.props.updateRadio}

                            />
                        })}

                    </div>
                </div>
                <button type="button" onClick={this.addLine}>Add a Line</button>
                <div className="saveButtonDiv">
                    <button className="buttonSave button" onClick={this.SaveToData} type="button"><span>Save</span></button>
                </div>

            </div >
        );
    }
}

export default Poem;