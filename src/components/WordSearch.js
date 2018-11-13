import React, { Component } from 'react';
import axios from 'axios'

class WordSearch extends Component {

  constructor() {
    super()
    this.state = {
      word: ''
    }
  }

  updateWord = (e) => {
    this.setState({ word: e.target.value })
  }

  getRhymes = async()=>{
    let rhymes = await axios.get('https://api.datamuse.com/words?rel_rhy='+this.state.word)
    //random rhymes
    console.log(rhymes)
    let rhyme1 = rhymes[0].word
    let rhyme2 = rhymes[1].word
    let rhyme3 = rhymes[2].word
    let rhyme4 = rhymes[3].word
    this.props.setRhymes(rhyme1,rhyme2, rhyme3, rhyme4)
  }

  render() {
    return (
      <div className="word-search">
        <input type="text" value={this.state.word} onChange={this.updateWord} />
        <button type="button" onClick={this.getRhymes}>Go</button>
      </div>
    );
  }
}

export default WordSearch;