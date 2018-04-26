import React from "react"
import "./contact.css"
import Moa from "./Moa@1x.jpg"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="contact-info">
        Contact
          <address>
            <a href="mailto:moa.danielsson@gmail.com">Contact Me</a>
          </address>
        </div>
      </div>
    )
  }
}

export default AboutMe
