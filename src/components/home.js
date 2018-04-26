import React from "react"
import "./home.css"
import GreenLeaf from "./green-leaf.jpg"
import { Link } from "react-router-dom"

class Home extends React.Component {

  render() {
    return (

    <div className="hero-container">
      <div className="hero-text">
        <h1>Moa Danielsson</h1>
          <p>junior front-end developer</p>

      <Link to="/contact">
        <button>Contact Me</button>
      </Link>

      </div>

      <img className="greenleaf-img" alt="green leafs" src={GreenLeaf} />

    </div>
)
}
}

export default Home
