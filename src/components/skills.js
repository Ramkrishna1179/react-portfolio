import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 2000,
      delay: 50,
      mirror: true,
    });
  });

  return (
    <div className="container-fluid">
      <h1 style={{ paddingLeft: "100px", margin: "50px 0px 50px 0px" }}>
        Education & Skills
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div style={{ margin: "0px 0px 50px 40px" }}>
              <div
                style={{
                  backgroundColor: "#f7f7ff",
                  marginRight: "80px",
                  borderRadius: "10px",
                }}
                className="pb-5"
              >
                <div className="ps-5 pt-5" data-aos="fade-up">
                  <p style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    2021-2022
                  </p>
                  <h5 style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    Front-End Web Developement
                  </h5>
                  <p style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    Masai School
                  </p>
                </div>

                <div className="pt-3 ps-5" data-aos="fade-up">
                  <p style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    2017-2021
                  </p>
                  <h5 style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    B.Tech Mechanical Engineering
                  </h5>
                  <p style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    Sage University Indore
                  </p>
                </div>

                <div className="pt-3 ps-5" data-aos="fade-up">
                  <p style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    2020-2021
                  </p>
                  <h5 style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    Masterr certificate in CAD/CAM
                  </h5>
                  <p style={{ color: "#0b0b13", marginBottom: "5px" }}>
                    Indo German Tool Room Indore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 pt-4">
            <div className="container">
              <div className="row mt-4" data-aos="fade-up">
                <div className="col-3"></div>
                <div className="col-9">
                  <h6 className="html5">Javascript</h6>
                </div>
                <div className="col-3">
                  <h2 className="text-end me-3">90%</h2>
                </div>
                <div className="progress col-9 ps-0 mt-4">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="row mt-4" data-aos="fade-up">
                <div className="col-3"></div>
                <div className="col-9">
                  <h6 className="html5">HTML5</h6>
                </div>
                <div className="col-3">
                  <h2 className="text-end me-3">85%</h2>
                </div>
                <div className="progress col-9 ps-0 mt-4">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="row mt-4" data-aos="fade-up">
                <div className="col-3"></div>
                <div className="col-9">
                  <h6 className="html5">CSS3</h6>
                </div>
                <div className="col-3">
                  <h2 className="text-end me-3">75%</h2>
                </div>
                <div className="progress col-9 ps-0 mt-4">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="row mt-4" data-aos="fade-up">
                <div className="col-3"></div>
                <div className="col-9">
                  <h6 className="html5">React</h6>
                </div>
                <div className="col-3">
                  <h2 className="text-end me-3">30%</h2>
                </div>
                <div className="progress col-9 ps-0 mt-4">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>

              <div className="row mt-4" data-aos="fade-up">
                <div className="col-3"></div>
                <div className="col-9">
                  <h6 className="html5">Bootstrap5</h6>
                </div>
                <div className="col-3">
                  <h2 className="text-end me-3">50%</h2>
                </div>
                <div className="progress col-9 ps-0 mt-4">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
// <div className="row pt-5">
//                 <div className="col-3 mt-44">
//                   <h1 style={{ }} className="text-end me-3">
//                     75%
//                   </h1>
//                 </div>
//                 <div className="progress col-9 ps-0 mt-4">
//                   <div
//                     className="progress-bar progress-bar-striped progress-bar-animated"
//                     role="progressbar"
//                     aria-label="Animated striped example"
//                     aria-valuenow="75"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "75%" }}
//                   >
//                     75%
//                   </div>
//                 </div>
//               </div>
