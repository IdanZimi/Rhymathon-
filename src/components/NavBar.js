import React, { Component } from 'react';
import { BrowserRouter as Router , Route  , Link} from 'react-router-dom'
import '../navBar.css'
class NavBar extends Component {

  render() {
    return (
        <div className="rhymeNavbar">
          <Link className="link firstLink" to="/"><i class="fas fa-home"></i></Link>
          <Link className="link restLinks" to="/n/mainpage">Create</Link>
          <Link className="link restLinks" to="/n/poems">Poems</Link>
        </div>
    );
  }
}

export default NavBar;
