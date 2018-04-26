import React from "react"
import "./contact.css"
import Moa from "./Moa@1x.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div id="contact" className="contact-me">
        <h4>TEXT CONTACT ME</h4>
          <p>
						Get the text here!
          </p>
          <address>
            <a href="mailto:moa.danielsson@gmail.com">Contact Me</a>
            <p>Årsta, Stockholm</p>
          </address>
        </div>
      </div>
    )
  }
}

export default AboutMe
