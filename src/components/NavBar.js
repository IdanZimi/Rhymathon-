import React, { Component } from 'react';
import { BrowserRouter as Router , Route  , Link} from 'react-router-dom'
import '../Css/navBar.css'
class NavBar extends Component {

  render() {
    return (
        <div className="rhymeNavbar ">
          <Link className="link firstLink" to="/"><i className="fas fa-home"></i></Link>
          <Link className="link restLinks" to="/n/mainpage">Create <i className="far fa-file-alt"></i></Link>
          <Link className="link restLinks" to="/n/poems">Poems <i className="fas fa-feather-alt"></i></Link>
        </div>
    );
  }
}

export default NavBar;
