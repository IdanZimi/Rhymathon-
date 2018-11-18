import React, { Component } from 'react';
import '../SinglePoem.css'
import axios from 'axios'


class SinglePoem extends Component {
    constructor() {
        super()
        this.state = {
          popup: false,
          emailTo: ""
        }
      }
      popUp = () => {
        this.setState({popup: !this.state.popup})
      }

    deletePoem = () => {
        axios.get('http://localhost:4000/rhymeData/deletePoem/' + this.props.poem._id)
        this.props.deletePoemState(this.props.poem._id)
    }
    updateText = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    sendMail = async ()=>{
        let content = this.props.poem.lyrics.map(b => { return b.text + " " + b.rhyme});
        await axios.get('http://localhost:4000/rhymeData/send/' + this.state.emailTo+'/'+content)
        this.popUp()
        alert ('mail sent.')
    }
    render() {
        return (
            <span>
            <div className="poemContainer">
                <div>
                    <p>{this.props.poem.title} / {this.props.poem.userName}</p>
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
                    </div>
                </div>
            </div>
            {this.state.popup ? 
                <div className="outterPop">
                <div className="pop-up">
                  <p className="popMail">Send email to: </p><input type="text" className="emailTo" name="emailTo" value={this.state.emailTo} onChange={this.updateText} />
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