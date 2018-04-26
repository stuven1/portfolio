import React from "react"
import "./aboutme.css"
import Moa from "./Moa@1x.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me">
        <div className="moa-text">Moa D
        </div>

        <div className="hello-text">Hello!</div>
        <div className="hello-text">My name is Moa</div>


        <div className="about-text">
          I love technology in all its forms.
          To create, develop and produce.
          Previous experience within the retail sales and
          marketing, training and presentations.
          Curious about what the future has to offer.
        </div>

        <img className="profil-img" alt="This is me" src={Moa} />
      </div>
    )
  }
}

export default AboutMe
