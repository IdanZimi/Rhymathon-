import React, { Component } from 'react';
import '../Css/profilePage.css'

class MyPoem extends Component {

    render() {
        return (
            <div className="mypoem">
                <h4 className="title">{this.props.poem.title}</h4>
                {this.props.poem.lyrics.map((line) => {
                    if (line.id === this.props.poem.lyrics[this.props.poem.lyrics.length - 1].id) {
                        return (<p>{line.text} {line.rhyme}.</p>)
                    }
                    return (<p>{line.text} {line.rhyme},</p>)
                })}
            </div>
        );
    }
}

export default MyPoem;