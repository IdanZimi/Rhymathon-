import React, { Component } from 'react';
import '../App.css'
import { Link} from 'react-router-dom'
class Landing extends Component {

  render() {
    return (
      <div>
          <div>
            <h1 id="my">My Rhymathon</h1>
            <button type="button" class="btn btn-secondary btn-lg btn-block button"><span className="enterSpan"><Link to="/mainPage">Enter</Link></span></button>
          </div>
      </div>
    );
  }
}

export default Landing;