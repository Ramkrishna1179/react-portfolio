import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
class contact extends React.Component {
  componentDidMount() {
    AOS.init({
      offset: 100,
      duration: 2000,
      delay: 50,
      mirror: true,
    });
  }
  render() {
    return (
      <div className="container-fluid bg-light pt-5 pb-5" id="landToContact">
        <div className="container mt-5 ps-5 ">
          <div className="row text-center ps-5">
            <div className="col-md-5 text-start" data-aos="fade-up">
              <h1>Contact Info</h1>
              <ul className="p-5" id="Add_Ul">
                <li className="d-flex py-2">
                  <div>
                    <i class="fa-solid fa-location-dot me-3"></i>
                  </div>
                  <div>Address: House nu. 11/7 Chahawani ushaganj Indore.</div>
                </li>
                <li className="d-flex py-2">
                  <div>
                    <i class="fa-solid fa-phone me-3"></i>
                  </div>
                  <div>Phone: +91-913.1445.742</div>
                </li>

                <li className="d-flex py-2">
                  <div>
                    <i class="fa-solid fa-envelope me-3"></i>
                  </div>
                  <div>Email: Ramkrashnayadav1998@gmail.com</div>
                </li>
              </ul>
            </div>
            <div className="col-md-7 text-start" data-aos="fade-down">
              <h1>Contact form</h1>
              <form>
                <ul className="text-start p-5 pe-0">
                  <li className="d-flex pt-2">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="form-control me-2"
                    />
                    <input
                      type="text"
                      placeholder="Your Email*"
                      className="form-control ms-2"
                    />
                  </li>

                  <li className="d-flex pt-2 mt-4">
                    <input
                      type="text"
                      placeholder="Subject*"
                      className="form-control me-2"
                    />
                    <input
                      type="text"
                      placeholder="Phone*"
                      className="form-control ms-2"
                    />
                  </li>

                  <li className="mt-4" style={{ listStyle: "none" }}>
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="4"
                      placeholder="Your Message ..."
                    ></textarea>
                  </li>

                  <li className="mt-4" style={{ listStyle: "none" }}>
                    <button
                      className="btn btn-primary px-3"
                      style={{ fontSize: "22px", background: "#040c2c" }}
                    >
                      Send Message
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default contact;
