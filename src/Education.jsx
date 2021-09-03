import React, { Component } from "react";
import "./Style.css";

export default class Education extends Component {
  render() {
    return (
      <div>
        {/* <!-- education section starts  --> */}

        <section className="education" id="education">
          <h1 className="heading">
            {" "}
            my <span>education</span>{" "}
          </h1>

          <div className="box-container">
            <div className="box">
              <i className="fa fa-graduation-cap"></i>
              <span>2016</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className="box">
              <i className="fa fa-graduation-cap"></i>
              <span>2017</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className="box">
              <i className="fa fa-graduation-cap"></i>
              <span>2018</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className="box">
              <i className="fa fa-graduation-cap"></i>
              <span>2019</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className="box">
              <i className="fa fa-graduation-cap"></i>
              <span>2020</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className="box">
              <i className="fa fa-graduation-cap"></i>
              <span>2021</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
