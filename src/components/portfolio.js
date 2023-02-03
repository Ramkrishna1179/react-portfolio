import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
      delay: 50,
      mirror: true,
    });
  });
  return (
    <div>
      <div className="container-fluid bg-white pt-5 pb-5" id="landToPortfolio">
        <div className="container mt-1 mb-5">
          <div className="text-center">
            <h1>My Portfolio</h1>
            <p className="text-secondary mt-3">
              <em>I love what I do. I take great pride in what I do.</em>
            </p>
            <hr
              style={{
                width: "8%",
                border: "1px solid grey",
                display: "inline-block",
                opacity: "1",
              }}
            />
          </div>
          <div className="row">
            <div
              className="col-md-3 col-sm-6 text-center mt-5"
              data-aos="flip-left"
            >
              <i class="fa-solid fa-briefcase mb-3 text-secondary fs-2"></i>
              <h3
                className="t_color fs-2 fw-bolder"
                id="count"
                data-countup="true"
              >
                200
              </h3>
              <p className="text-secondary fs-4">Total Projects</p>
            </div>

            <div className="col-md-3 col-sm-6 text-center mt-5">
              <i class="fa-regular fa-face-smile mb-3 text-secondary fs-2"></i>
              <h3 className="t_color fs-2 fw-bolder" data-countup="true">
                120
              </h3>
              <p className="text-secondary fs-4">Happy Clients</p>
            </div>

            <div className="col-md-3 col-sm-6 text-center mt-5">
              <i class="fa-regular fa-calendar-days mb-3 text-secondary fs-2"></i>
              <h3 className="t_color fs-2 fw-bolder" data-countup="true">
                1+
              </h3>
              <p className="text-secondary fs-4">Years of Experience</p>
            </div>

            <div
              className="col-md-3 col-sm-6 text-center mt-5"
              data-aos="flip-left"
            >
              <i class="fa-solid fa-trophy mb-3 text-secondary fs-2"></i>
              <h3 className="t_color fs-2 fw-bolder" data-countup="true">
                10
              </h3>
              <p className="text-secondary fs-4">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
