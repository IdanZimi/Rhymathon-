import React, { Component } from 'react';
import '../SinglePoem.css'


class SinglePoem extends Component {

    // componentDidMount = () => {
    //     this.setState({ word: this.props.poem.wordSearched }, () => { console.log(this.state.word) })
    //     this.setState({ lyrics: this.props.poem.lyrics })
    //     this.setState({ title: this.props.title })
    //     this.setState({ userName: this.props.userName })

    // }
    // poem = [{
    // lyrics: []
    // }]
    render() {
        console.log(this.props.poem)
        return (
            <div>
                <div>
                    {this.props.poem.map(p => {
                        return (
                            <div className="poemContainer">
                                <p>Chosen Word:{" "}{p.wordSearched}</p>
                                <p>{p.title} / {p.userName}</p>
                                <div>  
                                    {p.lyrics.map(b => {
                                        return <div>{b.text + " " + b.rhyme}</div>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default SinglePoem;