import React from "react";

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
          <a href="/">Home</a>
        </li>
        {/* <li>
          <a href="/addItem">Add to Fridge</a>
        </li> */}
        {/* <li>
          <a href="/ownerPage">Owner Page</a>
        </li> */}
        <li>
          <a href="/forms">Forms</a>
        </li>
        <li>
          <a href="/view-locations">View Locations</a>
        </li>
        <li>
          <a href="/single-location">Single Locations</a>
        </li>
        {/* <li>
          <a href="/social">Contact Us</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
