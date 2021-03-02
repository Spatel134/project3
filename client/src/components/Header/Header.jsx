import React from "react";
import { Link } from "react-router-dom"
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/items">Forms</Link>
            </li>
            <li>
              <Link to="/locations">View Locations</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
