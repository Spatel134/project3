import React from "react";
import M from "materialize-css";
import { useEffect } from "react";


const Sidebar = () => {
  useEffect(() => {
    M.AutoInit();

    // Testing
    // document.addEventListener("DOMContentLoaded", function () {
    //   var elems = document.querySelectorAll(".sidenav");
    //   const options = {
    //     edge: "right",
    //   };
    //   var instances = M.Sidenav.init(elems, options);

    //   const sideNav = document.querySelector(".sidenav");
    //   instances[0].open();
    // });
  });
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <a
                href="#"
                className="sidenav-trigger"
                data-target="mobile-links"
              >
                <i className="material-icons">menu</i>
              </a>
              <a href="/" className="brand-logo">
                Community Chest
              </a>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav sidenav-fixed" id="mobile-links">
        <li>
          <a href="/api/home">Home</a>
        </li>
        <li>
          <a href="/api/addItem">Add to Fridge</a>
        </li>
        <li>
          <a href="/api/ownerPage">Owner Page</a>
        </li>
        <li>
          <a href="/api/locations">Locations</a>
        </li>
        <li>
          <a href="/api/social">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
