import React, { Component } from 'react';
import axios from 'axios'
import '../lines.css'


class Poem extends Component {
    constructor() {
        super()
        this.state = {
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        }
    }

    updateText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div className="lines">
                <div className="poemline">
                    <input className="input" type="text" value={this.state.line1} name="line1" onChange={this.updateText} />
                    {this.props.rhymes[this.props.randNum1]}
                </div><br />
                <div className="poemline">
                    <input className="input" type="text" value={this.state.line2} name="line2" onChange={this.updateText} />
                    {this.props.rhymes[this.props.randNum2]}
                </div><br />
                <div className="poemline">
                    <input className="input" type="text" value={this.state.line3} name="line3" onChange={this.updateText} />
                    {this.props.rhymes[this.props.randNum3]}
                </div><br />
                <div className="poemline">
                    <input className="input" type="text" value={this.state.line4} name="line4" onChange={this.updateText} />
                    {this.props.rhymes[this.props.randNum4]}
                </div>
                {/* <button type="button" onClick={}>Post</button> */}

            </div>
        );
    }
}

export default Poem;