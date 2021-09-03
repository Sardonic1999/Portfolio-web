import React, { Component } from "react";
import "./Style.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* <!-- contact section starts  --> */}

        <section className="contact" id="contact">
          <h1 className="heading">
            {" "}
            <span>contact</span> me{" "}
          </h1>

          <div className="row">
            <div className="content">
              <h3 className="title">contact info</h3>

              <div className="info">
                <h3>
                  {" "}
                  <i className="fa fa-envelope"></i> example@gmail.com]{" "}
                </h3>
                <h3>
                  {" "}
                  <i className="fa fa-phone"></i> +998-456-7890{" "}
                </h3>
                <h3>
                  {" "}
                  <i className="fa fa-phone"></i> +998-222-3333{" "}
                </h3>
                <h3>
                  {" "}
                  <i className="fa fa-map-marker-alt"></i> tashkent uzbek{" "}
                </h3>
              </div>
            </div>

            <form action="">
              <input type="text" placeholder="name" className="box" />
              <input type="email" placeholder="email" className="box" />
              <input type="text" placeholder="project" className="box" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="box message"
                placeholder="message"
              ></textarea>
              <button type="submit" className="btn">
                {" "}
                send <i className="fa fa-paper-plane"></i>{" "}
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
