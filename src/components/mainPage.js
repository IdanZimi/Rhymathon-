import React, { Component } from 'react';
import axios from 'axios'
import Poem from './Poem'
import '../mainPage.css'
class mainPage extends Component {

  constructor() {
    super()
    this.state = {
      lines: [],
      word: '',
    }
  }

  updateLines = (id, value) => {
    let lines = this.state.lines.map((line) => {
      if (line.id === id) {
        return { ...line, text: value }
      }
      return line;
    })

    this.setState({ lines: lines })
  }

  updateWord = (e) => {
    this.setState({ word: e.target.value })
  }

  getRhymes = async () => {
    let result = await axios.get('https://api.datamuse.com/words?rel_rhy=' + this.state.word)
    //random rhymes
    let rhymes = result.data
    console.log(rhymes)
    const lines = []
    let i = 0
    if(rhymes[0]===undefined){
      return alert('This word does not rhyme with any currently known word.')
    }
    while (i < 4) {
      let splitArr = rhymes[Math.floor((Math.random() * rhymes.length))].word.split(' ')
      if (!splitArr[1]) {
        let line = { text: "", rhyme: splitArr[0], id: ++i }
        lines.push(line);
      }
    }
    this.setState({ lines: lines })
  }

  render() {

    if (this.state.lines[0] === undefined) {
      return (
      <div className="mainPage">
        <div className="word-search">
          <input className="wordInput" type="text" value={this.state.word} onChange={this.updateWord} placeholder="Choose a word" />
          <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
        </div>
      </div>)
    }
    else {
      return (
        <div className="mainPage">
          <div className="word-search">
            <input className="wordInput" type="text" value={this.state.word} onChange={this.updateWord} placeholder="Choose a word" />
            <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
          </div>
          <Poem word={this.state.word} lines={this.state.lines} updateLines={this.updateLines} />
        </div>
      )
    }
  }

}


export default mainPage;