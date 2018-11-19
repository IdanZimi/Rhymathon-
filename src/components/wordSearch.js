import React, { Component } from 'react';
import '../Css/mainPage.css'

class WordSearch extends Component {

    getRhymes=()=>{
        this.props.getRhymes()
    }

    updateState=(e)=>{
        this.props.updateState(e)
    }

  render() {
    return (
      <div className="wordSearch">
        <div className="word-search">
            <input className="wordInput" name="word" type="text" value={this.props.word} onChange={this.updateState} placeholder="Choose a word" />
            <input className="numberLinesInput" name="numLines" type="number" min='0' max='10' value={this.props.numLines} onChange={this.updateState} placeholder="Number of Lines" />
            <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
          </div>
      </div>
    );
  }
}

export default WordSearch;