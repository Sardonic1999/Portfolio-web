import React, { Component } from "react";
import "./Style.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <!-- header section starts  --> */}

        <header>
          <div className="user">
            <img src="" alt="image" />
            <h3 className="name">Sardonic</h3>
            <p className="post">front end developer</p>
          </div>

          <nav className="navbar">
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#education">education</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
