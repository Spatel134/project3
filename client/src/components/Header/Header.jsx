import React from "react";
const Header = (props) => {
  return (
    <nav className="nav-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <a href="/" className="brand-logo center">
            {props.title}
          </a>
          <a href="/" data-target="mobile-links" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul class="left hide-on-med-and-down">
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
              <a href="/locations">View Locations</a>
            </li>
            <li>
              <a href="/api/locations/:id">Single Locations</a>
            </li>
            {/* <li>
          <a href="/social">Contact Us</a>
        </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
