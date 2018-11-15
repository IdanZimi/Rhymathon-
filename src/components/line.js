import React, { Component } from 'react';
import axios from 'axios'
import '../lines.css'



class Line extends Component {

    updateText = (e) => {
    let id = this.props.line.id
    let value = e.target.value
    this.props.updateLines(id , value)
    }

    render() {
        return (

            <div className="poemline">
                <input className="input otherInput" type="text" value={this.props.line.text} name="line2" onChange={this.updateText} />
                <div className="rhyme">{this.props.line.rhyme}</div>
            </div>
        );
    }
}

export default Line;