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
      saved: false,
      numLines: Number
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

  updateNumLines = (e) => {
    this.setState({ numLines: e.target.value })
  }

  removePoem = () => {
    this.setState({ saved: true, lines: [] })
  }

  addPoem = () => {
    this.setState({ saved: false })
  }

  getRhymes = async () => {
    let result = await axios.get('https://api.datamuse.com/words?rel_rhy=' + this.state.word)
    //random rhymes
    let rhymes = result.data
    console.log(rhymes)
    const lines = []
    const myRhymes = []
    let i = 0

    if (this.state.word === '') {
      return alert("Please fill in a word.")
    }
    else if (this.state.numLines === Number ){
      // alert("Please state the number of lines for your poem.")
      this.setState({numLines : 4})
    }
    else if(this.state.numLines>10){  
      return alert("You must have less than 10 lines.")
    }
    else if (rhymes[0] === undefined) {
      return alert('This word does not rhyme with any currently known word.')
    }

    while (i < 10) {
      console.log(rhymes[Math.floor((Math.random() * rhymes.length))].word)
      let splitArr = rhymes[Math.floor((Math.random() * rhymes.length))].word.split(' ')
      if (!splitArr[1]) {
        myRhymes.push(splitArr[0])
        i++
      }
      // if (!splitArr[1]) {
      //   let line = { text: "", rhyme: splitArr[0], id: ++i }
      //   lines.push(line);
      // }
    }

    let a = 0
    while (a < this.state.numLines) {
      let line = { text: "", rhyme: myRhymes[a], id: ++a }
      lines.push(line)
    }

    this.setState({ lines: lines })
    this.addPoem()
  }

  render() {

    if (this.state.lines[0] === undefined || this.state.saved === true) {
      return (
        <div className="mainPage backMainPage">
          <h1 className="mainPageHeader">Poem Template</h1>

          <div className="word-search">
            <input className="wordInput" type="text" value={this.state.word} onChange={this.updateWord} placeholder="Choose a word" />
            <input className="numberLinesInput" type="number"min='0'  max='10' value={this.state.numLines} onChange={this.updateNumLines} placeholder="Number of Lines" />
            <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
          </div>
        </div>)
    }
    else {
      return (
        <div className="mainPage backMainPage">
          <h1 className="mainPageHeader">Song Template</h1>

          <div className="word-search">
            <input className="wordInput" type="text" value={this.state.word} onChange={this.updateWord} placeholder="Choose a word" />
            <input className="numberLinesInput" type="number" min='0' max='10' value={this.state.numLines} onChange={this.updateNumLines} placeholder="Number of Lines" />
            <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
          </div>
          <Poem
            word={this.state.word}
            lines={this.state.lines}
            updateLines={this.updateLines}
            removePoem={this.removePoem}
            saved={this.state.saved}
          />
        </div>
      )
    }
  }

}


export default mainPage;