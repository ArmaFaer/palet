import React, { Component, Fragment } from "react";
import { Link, withRouter } from 'react-router-dom';


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navBar">
        <span className="logo">PALET</span>
        <Link className='nav-link' to="/"><button className='home'>Home</button></Link>
        <Link className='nav-link' to="/createPost"><button className='createPost'>Create Post</button></Link>
      </div >
    )
  }
}

export default NavBar;
