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
                <div>
                    <input className="line" type="text" value={this.state.line1} name="line1" onChange={this.updateText} />
                    {this.props.rhyme1}
                </div><br/>
                <div>
                    <input className="line" type="text" value={this.state.line2} name="line2" onChange={this.updateText} />
                    {this.props.rhyme2}
                </div><br/>
                <div>
                    <input className="line" type="text" value={this.state.line3} name="line3" onChange={this.updateText} />
                    {this.props.rhyme3}
                </div><br/>
                <div>
                    <input className="line" type="text" value={this.state.line4} name="line4" onChange={this.updateText} />
                    {this.props.rhyme4}
                </div>
                {/* <button type="button" onClick={}>Post</button> */}

            </div>
        );
    }
}

export default Poem;