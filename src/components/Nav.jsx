import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "../scss/nav.scss"

export default class Nav extends Component {
  render() {
    return (
      <>
        <div className='nav' >
          <h2 className="nav-title">Todd Rasband</h2>
          <nav>
            <NavLink to="/" activeClassName="active" exact>Splash</NavLink>
            <NavLink to="/about" activeClassName="active" exact>About</NavLink>
            <NavLink to="/webdev" activeClassName="active">WebDev</NavLink>
            <NavLink to="/adobe" activeClassName="active">Adobe</NavLink>
            <NavLink to="/education" activeClassName="active">Education</NavLink>
          </nav>
        </div>
      </>
    )
  }
}
