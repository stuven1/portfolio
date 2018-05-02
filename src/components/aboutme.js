import React from "react"
import "./aboutme.css"
import Moa from "./Moa@1x.png"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="info-header">About</div>

        <div className="all-info">
          <div className="div-textes">
            <div className="mini-text">Moa Danielsson</div>
            <div className="intro-text">Hello!</div>
            <div className="intro-text">My name is Moa.</div>
            <div className="about-text">
              Im a front end developerte who loves technology in all kind of forms and shapes.
              To create, develop and produce small / large projects.
              Previous experience within the retail sales and
              marketing, training and presentations.Curious about what the future has to offer.
              Main worked with: HTML, CSS, JavaScript, React & Node.js.

              <div className="socialmedia-bar">
                <i className="fab fa-linkedin"></i>
                <i class="fab fa-spotify"></i>
                <i class="far fa-envelope"></i>
                <i class="fas fa-mobile-alt"></i>
              </div>
            </div>
          </div>
          <img className="profil-img" alt="This is me" src={Moa} />

        </div>
      </div>
    )
  }
}

export default AboutMe
