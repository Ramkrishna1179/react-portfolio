import React from "react";

function Footer() {
  const styles = {
    HomeTitleDiv: {
      // paddingTop: "470px",
    },

    HomeHeading: {
      // fontSize: "50px",
      color: "white",
    },
  };

  return (
    <div className="container-fluid footer-area">
      <div className="container">
        <div className="row text-center">
          <div style={styles.HomeTitleDiv}>
            <div className="mt-2 homeIcons">
              <a href="https://www.facebook.com/login/">
                <i class="fa-brands heading ms-3 fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/">
                <i class="fa-brands heading ms-3 fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <i class="fa-brands heading ms-3 fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/accounts/login/">
                <i class="fa-brands heading ms-3 fa-square-instagram"></i>
              </a>
            </div>
            <div class="text-center mt-3">
              <hr className="text-white" />
              <p class="footer-alt mb-0 f-14 text-white" id="reserve1">
                2023 © Portfolio, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
// <h4 style={{ color: "white", letterSpacing: "5px" }}> HELLO</h4>
// <h4 style={styles.HomeHeading} data-aos="fade-up">I am Ramkrishna Yadav.</h4>
//         <h6 style={{color: "white" }}>
//           Sasta Frontend Developer
//         </h6>
