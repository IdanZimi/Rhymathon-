import React, { Component } from 'react';
import axios from 'axios'
import Poem from './Poem'
import '../mainPage.css'
import WordSearch from './wordSearch';

class mainPage extends Component {

  constructor() {
    super()
    this.state = {
      lines: [],
      rhymes: [],
      word: '',
      saved: false,
      numLines: Number
    }
  }
  updateRadio=(value , id )=>{
    console.log(value)
    console.log(this.state.lines)   
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

  updateState = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  removePoem = () => {
    this.setState({ saved: true, lines: [] })
  }

  addPoem = () => {
    this.setState({ saved: false })
  }

  checkIfErr(rhymes) {
    if (this.state.word === '') {
      return alert("Please fill in a word.")
    }
    else if (this.state.numLines === Number) {
      // alert("Please state the number of lines for your poem.")
      this.setState({ numLines: 4 })
    }
    else if (this.state.numLines > 10) {
      return alert("You must have less than 10 lines.")
    }
    else if (rhymes[0] === undefined) {
      return alert('This word does not rhyme with any currently known word.')
    }
  }

  getRhymes = async () => {
    let result = await axios.get('https://api.datamuse.com/words?rel_rhy=' + this.state.word)
    //random rhymes
    let rhymes = result.data
    console.log(rhymes)
    const lines = []
    const myRhymes = []
    let i = 0

    this.checkIfErr(rhymes)

    while (i < 10) {
      console.log(rhymes[Math.floor((Math.random() * rhymes.length))].word)
      let splitArr = rhymes[Math.floor((Math.random() * rhymes.length))].word.split(' ')
      if (!splitArr[1]) {
        myRhymes.push(splitArr[0])
        i++
      }
    }

    let a = 0
    while (a < this.state.numLines) {
      let line = { text: "", rhyme: myRhymes[0], id: ++a }
      myRhymes.splice(0, 1)
      lines.push(line)
    }

    this.setState({ lines: lines, rhymes: myRhymes })
    console.log(this.state.rhymes)
    this.addPoem()
  }

  addLine=()=>{
    if(this.state.rhymes[0]===undefined){
      return alert('Sorry, you can only have 10 lines.')
    }
    let lines = [...this.state.lines]
    let rhymes = [...this.state.rhymes]
    let newLine = {text:'', rhyme:rhymes[0], id:lines[lines.length-1].id++}
    lines.push(newLine)
    rhymes.splice(0,1)
    this.setState({lines:lines, rhymes:rhymes})
  }

  removeLine=(id)=>{
    let lines = [...this.state.lines]
    let rhymes = [...this.state.rhymes]
    lines.map((line)=>{
      if(line.id === id){
        let index = line.indexOf
        rhymes.push(line.rhyme)
        lines.splice(index,1)
      }
    })
  }

  render() {

    if (this.state.lines[0] === undefined || this.state.saved === true) {
      return (
        <div className="mainPage backMainPage">
          <h1 className="mainPageHeader">Poem Template</h1>

          <WordSearch
            word={this.state.word}
            numLines={this.state.numLines}
            updateState={this.updateState}
            getRhymes={this.getRhymes}
          />
        </div>)
    }
    else {
      return (
        <div className="mainPage backMainPage">
          <h1 className="mainPageHeader">Song Template</h1>

          <WordSearch
            word={this.state.word}
            numLines={this.state.numLines}
            updateState={this.updateState}
            getRhymes={this.getRhymes}
          />
          <Poem
            word={this.state.word}
            lines={this.state.lines}
            updateLines={this.updateLines}
            removePoem={this.removePoem}
            saved={this.state.saved}
            addLine={this.addLine}
            updateRadio={this.updateRadio}
          />
        </div>
      )
    }
  }

}


export default mainPage;