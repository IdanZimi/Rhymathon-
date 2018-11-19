import React, { Component } from 'react';
import '../Css/App.css'
import { Link } from 'react-router-dom'
import Login from './login';
class Landing extends Component {

  render() {
    return (
      <div className="back">
        <div>
          <h1 id="my">My Freaky Poem©</h1>
          {/* <Link to="/n/mainPage">
            <button type="button" className="btn bttn btn-secondary btn-lg btn-block button">
              <span className="enterSpan">Enter</span>
            </button>
          </Link> */}
          <Login />
        </div>
      </div>
    );
  }
}

export default Landing;