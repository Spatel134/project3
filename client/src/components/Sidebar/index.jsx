import React from "react";
import { Link } from "react-router-dom"
import Header from "../Header/Header"

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
      <Header title="Community" />
      <ul className="sidenav" id="mobile-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <a href="/addItem">Add to Fridge</a>
        </li> */}
        {/* <li>
          <a href="/ownerPage">Owner Page</a>
        </li> */}
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/locations">View Locations</Link>
        </li>
        <li>
          <Link to="/api/locations/:id">Single Locations</Link>
        </li>
        {/* <li>
          <a href="/social">Contact Us</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
