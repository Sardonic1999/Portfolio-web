import React, { Component } from "react";
import "./Style.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <!-- home section starts  --> */}

        <section className="home" id="home">
          <h3>HI THERE !</h3>
          <h1>
            I'M <span>Sardonic</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            deserunt aspernatur fugiat minus enim ullam repudiandae sint sed
            magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Necessitatibus, at.
          </p>
          <a href="#about">
            <button className="btn">
              about me <i className="fa fa-user"></i>
            </button>
          </a>
        </section>
      </div>
    );
  }
}
