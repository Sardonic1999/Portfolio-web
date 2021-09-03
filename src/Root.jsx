import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";

export default class Root extends Component {
  render() {
    return (
      <div>
        <Home />
        <Header />
        <About />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}
