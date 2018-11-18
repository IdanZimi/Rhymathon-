import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
class Landing extends Component {

  render() {
    return (
      <div className="back">
        <div>
          <h1 id="my">My Freaky Poem©</h1>
          <Link to="/n/mainPage">
            <button type="button" className="btn bttn btn-secondary btn-lg btn-block button">
              <span className="enterSpan">Enter</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;