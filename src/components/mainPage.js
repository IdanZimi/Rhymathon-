import React, { Component } from 'react';
import axios from 'axios'
import Poem from './Poem'
import '../mainPage.css'
class mainPage extends Component {

  constructor() {
    super()
    this.state = {
      word: '',
      rhymes: [],
      randNum1: 0,
      randNum2: 1,
      randNum3: 2,
      randNum4: 3
    }
  }

  updateWord = (e) => {
    this.setState({ word: e.target.value })
  }

  randNum = () => {
    let rand1 = Math.floor((Math.random() * this.state.rhymes.length))
    let rand2 = Math.floor((Math.random() * this.state.rhymes.length))
    let rand3 = Math.floor((Math.random() * this.state.rhymes.length))
    let rand4 = Math.floor((Math.random() * this.state.rhymes.length))
    this.setState({ randNum1: rand1, randNum2: rand2, randNum3: rand3, randNum4: rand4 })
  }

  getRhymes = async () => {
    let result = await axios.get('https://api.datamuse.com/words?rel_rhy=' + this.state.word)
    //random rhymes
    let rhymes = result.data
    console.log(rhymes)
    let rhymeArr = []
    let i = 0
    while (i < rhymes.length) {
      let splitArr = rhymes[i].word.split(' ')
      if (!splitArr[1]) {
        rhymeArr.push(rhymes[i].word)
      }
      console.log(rhymes[i])
      i++
    }
    //   let rhyme1 = rhymes[0].word
    //   let rhyme2 = rhymes[1].word
    //   let rhyme3 = rhymes[2].word
    //   let rhyme4 = rhymes[3].word
    this.setState({ rhymes: rhymeArr })
    this.randNum()
  }

  render() {
    return (
      <div className="mainPage">
        <div className="word-search">
          <input className="wordInput" type="text" value={this.state.word} onChange={this.updateWord} placeholder="Choose a word" />
          <button className="button" type="button" onClick={this.getRhymes}><span>Go</span></button>
        </div>
        <Poem
          rhymes={this.state.rhymes}
          randNum1={this.state.randNum1}
          randNum2={this.state.randNum2}
          randNum3={this.state.randNum3}
          randNum4={this.state.randNum4}
        />
      </div>
    );
  }
}

export default mainPage;