import React from "react";
import { hover } from "@testing-library/user-event/dist/hover";
import AOS from 'aos';
import 'aos/dist/aos.css';
class Services extends React.Component {

  componentDidMount() {
    AOS.init({
      offset: 100,
      duration: 1000,
      delay:50,
      mirror:true,
    });
}

  render() {
    const styles = {
      service: {
        background: "#fafafa",
      },

      cart: {
        width: "100px",
        height: "100px",
        border: "1px solid #8a8a8a",
        borderRadius: "50%",
        textAlign: "center",
        margin: "auto",
        marginTop: "40px",
      },
      icon: {
        marginTop: "35px",
        fontSize: "30px",
      },

      cartTextColor: {
        fontSize: "18px",
        color: "#797979",
      },
    };
    return (
      <div
        style={styles.service}
        className="container-fluid pb-5"
        id="landToservice"
      >
        <div style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
          <h1 className="text-center">What's I'm doing,</h1>
          <p className="text-center text-secondary mt-3">
            <em>I love what I do. I take great pride in what I do.</em>
          </p>
          <p className="mx-auto mt-4" style={{ width: "8%" }}>
            <hr style={{ border: "1px solid grey",opacity: "1"}} />
          </p>
        </div>

        <div className="container pb-5">
          <div className="row mx-5 mb-4">
            <div className="col-sm-6 col-md-4" data-aos="fade-up" >
              <div className=" card">
                <div style={styles.cart} className="alkhdj">
                  <i className="fa-solid fa-desktop" style={styles.icon}></i>
                </div>
                <div className="card-body mx-2">
                  <div className="card-title text-center mt-2">
                    <h3 className="mt-2">Web Design</h3>
                    <p
                      className="card-text text-center mt-3"
                      style={styles.cartTextColor}
                    >
                      focuses on providing a great user experience with clear
                      navigation and intuitive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card border-none">
                <div className="lj" style={styles.cart}>
                  <i
                    class="fa-regular fa-pen-to-square"
                    style={styles.icon}
                  ></i>
                </div>
                <div className="card-body mx-2">
                  <div className="card-title text-center mt-2">
                    <h3 className="mt-2">Development</h3>
                    <p
                      className="card-text text-center mt-3"
                      style={styles.cartTextColor}
                    >
                      focuses on providing a great user experience with clear
                      navigation and intuitive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4" data-aos="fade-up" >
              <div className=" card">
                <div style={styles.cart}>
                  <i
                    class="fa-solid fa-person-chalkboard"
                    style={styles.icon}
                  ></i>
                </div>
                <div className="card-body mx-2">
                  <div className="card-title text-center mt-2">
                    <h3 className="mt-2">Marketing</h3>
                    <p
                      className="card-text text-center mt-3"
                      style={styles.cartTextColor}
                    >
                      focuses on providing a great user experience with clear
                      navigation and intuitive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mx-5 mb-4">
            <div className="col-sm-6 col-md-4">
              <div className=" card ">
                <div style={styles.cart}>
                  <i class="fa-solid fa-stairs" style={styles.icon}></i>
                </div>
                <div className="card-body mx-2">
                  <div className="card-title text-center mt-2">
                    <h3 className="mt-2">Strategy</h3>
                    <p
                      className="card-text text-center mt-3"
                      style={styles.cartTextColor}
                    >
                      focuses on providing a great user experience with clear
                      navigation and intuitive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4" data-aos="fade-up">
              <div className=" card">
                <div style={styles.cart}>
                  <i class="fa-solid fa-gears" style={styles.icon}></i>
                </div>
                <div className="card-body mx-2">
                  <div className="card-title text-center mt-2">
                    <h3 className="mt-2">Support</h3>
                    <p
                      className="card-text text-center mt-3"
                      style={styles.cartTextColor}
                    >
                      focuses on providing a great user experience with clear
                      navigation and intuitive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className=" card">
                <div style={styles.cart}>
                  <i
                    class="fa-solid fa-screwdriver-wrench"
                    style={styles.icon}
                  ></i>
                </div>
                <div className="card-body mx-2">
                  <div className="card-title text-center mt-2">
                    <h3 className="mt-2">We're experienced</h3>
                    <p
                      className="card-text text-center mt-3"
                      style={styles.cartTextColor}
                    >
                      focuses on providing a great user experience with clear
                      navigation and intuitive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;

// task thier shoukld we one like button which will handle the like and dislike on first click it will turn in liked and on second click it will show show its innertext dislike.
