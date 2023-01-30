import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "../componets_css/home.css";
function Home() {
  const styles = {
    HomePage: {
      backgroundImage:
        'url("http://john.wethemez.com/static/media/profile.8ca05271.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "900px",
      position: "relative",
      marginTop: "-150px",
      backgroundcolor: "red",
    },

    HomeTitleDiv: {
      // marginTop: "570px",
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
    <div className="container-fluid  text-center" style={styles.HomePage}>
      <div style={styles.HomeTitleDiv} className="ms-5">
        <h4 style={{ color: "white", letterSpacing: "5px" }}> HELLO</h4>
        <h1 style={styles.HomeHeading}>I am Ramkrishna Yadav.</h1>
        <h2 style={{ fontSize: "30px", color: "white" }}>
          Sasta Frontend Developer
        </h2>
        <div className="mt-3 ms-5 homeIcons">
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
// style={styles.heading}
// style={styles.heading}
// style={styles.heading}
// style={styles.heading}
