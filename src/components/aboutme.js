import React from "react"
import "./aboutme.css"
import Moa from "./Moa@1x.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div id="about" className="about-text">
          <h2>Moa D</h2>
        <div className="big-p-text">
          <p>Hello!</p>
          <p>My name is Moa</p>
          <p>I'm</p>
        </div>
        </div>

        <img className="profil-img" alt="This is me" src={Moa} />
      </div>
    )
  }
}

export default AboutMe
