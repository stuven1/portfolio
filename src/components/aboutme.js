import React from "react"
import "./aboutme.css"
import Moa from "./Moa@1x.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-text">
        Moa D
        </div>

        <div className="intro-text">Hello!<br />
        My name is Moa</div>
        
        <img className="profil-img" alt="This is me" src={Moa} />
      </div>
    )
  }
}

export default AboutMe
