import React, { Component } from 'react';
import axios from 'axios'
import Poem from './Poem'
import '../mainPage.css'
class mainPage extends Component {

  constructor() {
    super()
    this.state = {
      word: '',
      rhymes:[]
    }
  }

  updateWord = (e) => {
    this.setState({ word: e.target.value })
  }

  getRhymes = async () => {
    let result = await axios.get('https://api.datamuse.com/words?rel_rhy=' + this.state.word)
    //random rhymes
    let rhymes = result.data
    console.log(rhymes)
    let rhymeArr = []
    let i = 0
    while(i<4){
        rhymeArr.push(rhymes[i].word)
        console.log(rhymes[i])
        i++
    }
  //   let rhyme1 = rhymes[0].word
  //   let rhyme2 = rhymes[1].word
  //   let rhyme3 = rhymes[2].word
  //   let rhyme4 = rhymes[3].word
  this.setState({rhymes:rhymeArr})
  }

  render() {
    return (
      <div className="mainPage">
        <div className="word-search">
          <input className="wordInput" type="text" value={this.state.word} onChange={this.updateWord} placeholder="Choose a word" />
          <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
        </div>
        <Poem rhymes={this.state.rhymes}/>
      </div>
    );
  }
}

export default mainPage;