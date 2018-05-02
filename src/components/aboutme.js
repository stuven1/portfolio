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
                <a href="https://www.linkedin.com/in/modanielsson/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://open.spotify.com/user/duracellmoa1/playlist/2w0TFId99K0LKP8xLMbkLg?si=Gg_vJs5XRUK9yViJzp2Zrw" target="_blank">
                <i className="fab fa-spotify"></i></a>
                <a href="mailto:moa.danielsson@gmail.com?subject=contact form"><i className="far fa-envelope"></i></a>
                <i className="fas fa-mobile-alt"></i><span>+46706305940</span>
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
