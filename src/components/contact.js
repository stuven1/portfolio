import React from "react"
import "./aboutme.css"
import ContactMe from "./contact-me-now.png"

class Contact extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="contact-me">
          Contact
        </div>

        <div className="all-info">
          <div className="div-textes">
            <div className="intro-text">Pleas contact me!</div>
            <div className="about-text">
              Feel free to contact me.
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Contact
