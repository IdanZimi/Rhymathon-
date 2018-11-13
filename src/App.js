import React, { Component } from 'react';
import { BrowserRouter as Router  , Link} from 'react-router-dom'
import './App.css'
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1 id="my">My Rhymathon</h1>
            <button type="button" class="btn btn-secondary btn-lg btn-block button"><span className="enterSpan"><Link to="/mainPage">Enter</Link></span></button>
          </div>

          <div className="main-routes">
            {/* <Route path="/mainPage" exact component={mainPage} /> */}

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
