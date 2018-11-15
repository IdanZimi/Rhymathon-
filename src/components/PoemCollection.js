import React, { Component } from 'react';
import '../PoemCollection.css'
import axios from 'axios'
import SinglePoem from './SinglePoem';

class PoemCollection extends Component {
    constructor(){
        super()
        this.state = {
            poems:[]
        }
    }
     componentDidMount(){
        axios.get('http://localhost:4000/rhymeData').then((result)=>{
            let data= result.data;
            let poems = [...this.state.poems]
            poems.push(data)
            this.setState({poems: poems})
        });
    }

    // componentDidMount() {
    //     axios.get('http://localhost:8080/clients').then((response) => {
    //         console.log(response.data)
    //         this.setState({ Clients: response.data })
    //     })
    // }
  render() {
      console.log(this.state.poems)
      
    return (
      <div>
         {this.state.poems.map(poem=>{
             return <SinglePoem key={poem[0]._id} poem={poem}/>
         })}
      </div>
    );
  }
}

export default PoemCollection;