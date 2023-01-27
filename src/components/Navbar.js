import React from "react";
import '../componets_css/navbar.css'
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <a class="navbar-brand ms-5 link-info" href="#">
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
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link link-info" href="#">
              Home <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-info" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-info" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-info" href="#">
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
