import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import './Css/App.css'
import Landing from './components/Landing'
import mainPage from './components/mainPage';
import PoemCollection from './components/PoemCollection';
import NavBar from './components/NavBar'
import Register from './components/Register'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="main-routes">
            <Route path="/" exact component={Landing} />
            <Route path="/n" component={NavBar} />
            <Route path="/n/mainPage" exact component={mainPage}/>
            <Route path="/n/poems" exact component={PoemCollection}/>
            <Route path="/register" exact component={Register}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
