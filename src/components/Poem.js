import React, { Component } from 'react';
import axios from 'axios'


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
            <div className="poem">
                <span>
                    <input type="text" value={this.state.line1} name="line1" onChange={this.updateText} />
                    {this.props.rhyme1}
                </span>
                <span>
                    <input type="text" value={this.state.line2} name="line2" onChange={this.updateText} />
                    {this.props.rhyme2}
                </span>
                <span>
                    <input type="text" value={this.state.line3} name="line3" onChange={this.updateText} />
                    {this.props.rhyme3}
                </span>
                <span>
                    <input type="text" value={this.state.line4} name="line4" onChange={this.updateText} />
                    {this.props.rhyme4}
                </span>
                {/* <button type="button" onClick={}>Post</button> */}

            </div>
        );
    }
}

export default Poem;