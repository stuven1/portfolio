import React from "react"
import "./aboutme.css"
import Moa from "./Moa@1x.png"
import Typing from "react-typing-animation"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="info-header">About</div>

        <div className="all-info">
          <div className="div-textes">
            <div className="mini-text"><Typing speed={200} >Moa Danielsson</Typing></div>
            <div className="intro-text">Hello! <br /> name is Moa.</div>
            <div className="about-text">
              <div className="about-text-sub">
              Im a front end developer who loves technology in all kind of forms and shapes.
              To create, develop and produce small / large projects.
              Previous experience within the retail sales and
              marketing, training and presentations.Curious about what the future has to offer.
              Main worked with: HTML, CSS, JavaScript, React & Node.js.

                <div className="socialmedia-bar">
                  <a href="https://www.linkedin.com/in/modanielsson/" target="_blank">
                    <i className="fab fa-linkedin"></i></a>

                  <a href="https://open.spotify.com/user/duracellmoa1/playlist/2w0TFId99K0LKP8xLMbkLg?si=i98Vmk9MRlWkUn5cQIZ7Ig" target="_blank">
                    <i className="fab fa-spotify"></i></a>

                  <a href="mailto:moa.danielsson@gmail.com?subject=contact form">
                    <i className="far fa-envelope" /></a>

                  <a href="tel:+46706305940">
                    <i className="fas fa-mobile-alt" /><span className="my-phonnumber"></span></a>
                </div>
              </div>
            </div>
            <img className="profil-img" alt="This is me" src={Moa} />
            {/* <img className="profil-img" alt="This is me" src={Moa} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
