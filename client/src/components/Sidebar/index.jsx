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
