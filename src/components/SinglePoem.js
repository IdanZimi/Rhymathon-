import React, { Component } from 'react';
import '../Css/SinglePoem.css'
import axios from 'axios'


class SinglePoem extends Component {
    constructor() {
        super()
        this.state = {
            popup: false,
            emailTo: "",
            showAudio: false

        }
    }
    popUp = () => {
        this.setState({ popup: !this.state.popup })
    }

    deletePoem = () => {
        axios.get('http://localhost:4000/rhymeData/deletePoem/' + this.props.poem._id)
        this.props.deletePoemState(this.props.poem._id, this.props.poem.userName)
    }
    updateText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    displayAudio = ()=>{
    this.setState({showAudio:!this.state.showAudio})
    }
    playAudio = () => {
        let content = this.props.poem.title + " by " + this.props.poem.userName + " ," + this.props.poem.lyrics.map(b => { return b.text + " " + b.rhyme + " " });
        return (
            <div>
            <video className="video" controls autoplay name="media">
                <source src={`http://api.voicerss.org/?key=b17041a7246e4dea8c714eb7da05a48b&hl=en-us&src=${content}`} type='audio/mpeg' />
            </video>
            </div>)
    }
    sendMail = async () => {
        let content = this.props.poem.lyrics.map(b => { return b.text + " " + b.rhyme });
        try {
            await axios.get('http://localhost:4000/rhymeData/send/' + this.state.emailTo + '/' + content)
            this.popUp()
            alert('mail sent.')
        }
        catch (error) {
            console.log(error)
            alert('invalid mail address.')
        }

    }
    render() {
        return (
            <span>
                <div className="poemContainer">
                    <div>
                        <p>{this.props.poem.title} / {this.props.poem.userName}</p>
                        <p>Word Searched : {this.props.poem.wordSearched}</p>
                        <div>
                            {this.props.poem.lyrics.map(b => {
                                if (b.id === this.props.poem.lyrics[this.props.poem.lyrics.length - 1].id) {
                                    return <div>{b.text + " " + b.rhyme + "."}</div>
                                }
                                else {
                                    return <div>{b.text + " " + b.rhyme + ","}</div>
                                }
                            })}
                            <i class="far fa-trash-alt trash" onClick={this.deletePoem}></i>
                            <i class="far fa-envelope mail" onClick={this.popUp}></i>
                            <i class="fas fa-headphones voice" onClick={this.displayAudio}></i>
                            {this.state.showAudio ? this.playAudio() : null}
                            {/* <video className="video" controls autoplay name="media">
                                <source src={`http://api.voicerss.org/?key=b17041a7246e4dea8c714eb7da05a48b&hl=en-us&src=${this.playAudio()}`} type='audio/mpeg' />
                            </video> */}
                            {/* <audio src='http://api.voicerss.org/?key=b17041a7246e4dea8c714eb7da05a48b&hl=en-us&src=hello'></audio><i class="fas fa-headphones voice" onClick={this.playAudio}></i> */}
                        </div>
                    </div>
                </div>
                {this.state.popup ?
                    <div className="outterPop">
                        <div className="pop-up">
                            <p className="popMail">Send Email to: </p><input type="text" className="emailTo" name="emailTo" value={this.state.emailTo} onChange={this.updateText} />
                            <button onClick={this.popUp} className="closePop">X</button>
                            <button className="sendMail" onClick={this.sendMail}>Send!</button>
                        </div>
                    </div>

                    : null}
            </span>
        );
    }
}

export default SinglePoem;