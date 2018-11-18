import React, { Component } from 'react';
import '../SinglePoem.css'
import axios from 'axios'


class SinglePoem extends Component {

    deletePoem = () => {
        axios.get('http://localhost:4000/rhymeData/deletePoem/' + this.props.poem._id)
        this.props.deletePoemState(this.props.poem._id)
    }

    render() {
        return (
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
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePoem;