import React, { Component } from "react";
import "./Style.css";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <!-- about section starts  --> */}

        <section className="about" id="about">
          <h1 className="heading">
            {" "}
            <span>about</span> me{" "}
          </h1>

          <div className="row">
            <div className="info">
              <h3>
                {" "}
                <span> name : </span> Sardonic{" "}
              </h3>
              <h3>
                {" "}
                <span> age : </span> 22{" "}
              </h3>
              <h3>
                {" "}
                <span> qualification : </span> web{" "}
              </h3>
              <h3>
                {" "}
                <span> post : </span> front end developer{" "}
              </h3>
              <h3>
                {" "}
                <span> language : </span> english{" "}
              </h3>
              <a href="#">
                <button className="btn">
                  {" "}
                  download CV <i className="fa fa-download"></i>{" "}
                </button>
              </a>
            </div>

            <div className="counter">
              <div className="box">
                <span>2+</span>
                <h3>years of experience</h3>
              </div>

              <div className="box">
                <span>100+</span>
                <h3>porject completed</h3>
              </div>

              <div className="box">
                <span>430+</span>
                <h3>happy clients</h3>
              </div>

              <div className="box">
                <span>12+</span>
                <h3>awards won</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
