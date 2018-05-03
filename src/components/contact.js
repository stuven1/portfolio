import React from "react"
import "./contact.css"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="info-header">Contact</div>

        <div className="all-info">
          <div className="div-textes">
            <div className="mini-text">Say Hello!</div>
            <div className="contactme-text">
              If you think Im suitable for your project
              of if you’d just like to say “hello”, feel free to get in touch.
              <address>
                <a href="mailto:moa.danielsson@gmail.com?subject=contact form">Contact Me</a>
              </address>

              <div className="socialmedia-bar">
                <a href="https://www.linkedin.com/in/modanielsson/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://open.spotify.c />duracellmoa1/playlist/2w0TFId99K0LKP8xLMbkLg?si=i98Vmk9MRlWkUn5cQIZ7Ig" target="_blank">
                  <i className="fab fa-spotify"></i>
                </a>
                <a href="mailto:moa.danielsson@gmail.com?subject=contact form">
                  <i className="far fa-envelope" />
                </a>
                <i className="fas fa-mobile-alt" />
                <div className="num">+46706305940</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
