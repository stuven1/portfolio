import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

class Header extends React.Component {

  render() {
    return (

      <div id="nav" className="header-text">
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pictures">Pictures</Link>
          <Link to="/portfolio">Portfolio</Link>
        </header>
      </div>
    )
  }
}

export default Header
