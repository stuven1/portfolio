import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import AboutMe from "./aboutme"
import Contact from "./contact"
import Header from "./header"
import Home from "./home"
import Portfolio from "./portfolio"
import Pictures from "./pictures"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/pictures" component={Pictures} />
        </div>
      </Router>

    )
  }
}

export default App
