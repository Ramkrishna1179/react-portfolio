import React from "react";

function AboutMe() {
  const styles = {
    about: {
      marginTop: " 50px",
      paddingTop: "20px",
    },

    about_p_1: {
      color: "#999",
      letterSpacing: "1px",
      marginBottom: "30px",
      fontSize: "20px",
    },

    about_p_2: {
      color: "#999",
      letterSpacing: "1px",
      lineHeight: "1.5",
      marginBottom: "30px",
      fontSize: "18px",
    },
  };

  return (
    <div className="container d-flex mt-5" id="landToAbout">
      <div style={styles.about} className="ps-5">
        <h1>About Me</h1>
        <p style={styles.about_p_1}>Trainee Front-End Developer,</p>
        <p style={styles.about_p_2}>
          I am Ramkrashna Yadav, Currently I am working as a trainee frontend
          developer in Bridgefix Technology PVT LTD.I have completed B.Tech
          Mechanical engineering from sagar institute of research and technology
          Indore in 2021. For developing faster and attractive user interfaces I
          am learning the React.js frontend technology which enhanced the
          performance of our websites and help us to write reusable code. I have
          3+ months of work experience in frontend developement.I also have a 2+
          years of work experience in market research field which helps me alot
          to collaborating with my team members in current position, because in
          my previous job i was a team leader so i had to manage the all members
          of the team. I am a good team player because my previous job has
          tought me how to work in a team.
        </p>

        <div>
          <button className="btn btn-primary ms-5">Hire Me</button>
          <button className="btn btn-primary ms-5">Download CV</button>
        </div>
      </div>
      <div style={styles.about}>
        <img
          src="http://john.wethemez.com/static/media/apporoach_man_img.0f15c002.png"
          alt=""
        />
      </div>
    </div>
  );
}
// style={{marginTop : "1000px",position:"relative"}}
export default AboutMe;
