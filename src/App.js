import React, { Component } from 'react';
import { BrowserRouter as Router , Route  , Link} from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import mainPage from './components/mainPage';
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="main-routes">
            <Route path="/" exact component={Landing} />
            <Route path="/mainPage" exact component={mainPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
