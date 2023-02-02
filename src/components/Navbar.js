import React,{useEffect} from "react";
import "../componets_css/navbar.css";
function NavBar() {
  const NavStyle = {
    height: "75px",
    fontSize: "20px",
    zIndex: "1001",
    background : "#FF8B13",
  };
  return (
    <nav class="navbar navbar-expand-lg  fixed-top" style={NavStyle}>
      <a
        class="navbar-brand ms-5 nav-link"
        href="#"
        style={{ fontSize: "26px" }}
      >
        My Portfolio
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-5 px-5">
          <li class="nav-item active">
            <a class="nav-link" href="#landToHome">
              Home <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#landToAbout">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#landToservice">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#landToPortfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#landToContact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

// <div className="container">
//       <nav className="navbar navbar-light bg-light">
//         <a href="gknrgnr" className="navbar-brand">
//           Nabvar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse collapse-navbar" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <a href="#" className="nav-link">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Services
//               </a>
//             </li>

//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Contac
//               </a>
//             </li>

//             <li class="nav-item">
//               <a class="nav-link disabled" href="#">
//                 Disabled
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
