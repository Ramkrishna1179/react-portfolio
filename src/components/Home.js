import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect } from "react";
import "../componets_css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      mirror: true,
    });
  });

  const styles = {
    HomePage: {
      backgroundImage:
        'url("http://john.wethemez.com/static/media/profile.8ca05271.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "900px",
      position: "relative",

      marginTop: "-150px",
    },

    HomeTitleDiv: {
      paddingTop: "470px",
    },

    HomeHeading: {
      fontSize: "50px",
      color: "white",
    },

    heading: {
      margin: "5px",
      padding: "15px",
      background: "rgba(0,0,0,.3)",
      color: "white",
      borderRadius: "50%",
    },
  };
  return (
    <div
      className="container-fluid  text-center bg-image"
      style={styles.HomePage}
      id="landToHome"
    >
      <div style={styles.HomeTitleDiv} className="ms-5">
        <h4 style={{ color: "white", letterSpacing: "5px" }}> HELLO</h4>
        <h1 style={styles.HomeHeading} data-aos="fade-up">
          I am Ramkrishna Yadav.
        </h1>
        <h2 style={{ fontSize: "30px", color: "white" }}>
           Frontend Developer
        </h2>
        <div className="mt-3 ms-5 homeIcons" data-aos="fade-up">
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
      </div>
    </div>
  );
}
export default Home;

