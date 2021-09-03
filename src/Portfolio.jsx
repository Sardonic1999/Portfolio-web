import React, { Component } from "react";
import "./Style.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* <!-- portfolio section starts  --> */}

        <section className="portfolio" id="portfolio">
          <h1 className="heading">
            {" "}
            my <span>portfolio</span>{" "}
          </h1>

          <div className="box-container">
            <div className="box">
              <img src="" alt="img" />
            </div>

            <div className="box">
              <img src="" alt="img" />
            </div>

            <div className="box">
              <img src="" alt="img" />
            </div>

            <div className="box">
              <img src="" alt="img" />
            </div>

            <div className="box">
              <img src="" alt="img" />
            </div>

            <div className="box">
              <img src="" alt="img" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
