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
              <a href="mailto:moa.danielsson@gmail.com?subject=contact+form">Contact Me</a>
              </address>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default AboutMe
