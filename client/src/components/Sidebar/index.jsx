import React from "react";

const Sidebar = () => {
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

          {/* <div className="col s12 center-align">
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
          </div> */}

          {/* <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a> */}

          {/* <ul className="right hide-on-med-and-down">
            <li>
              <a href="/api/home" id="nav-tag">
                Home
              </a>
            </li>
            <li>
              <a href="/api/addItem" id="nav-tag">
                Add to Fridge
              </a>
            </li>
            <li>
              <a href="/api/ownerPage" id="nav-tag">
                Owner Page
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
     
    </div>
  );
};

export default Sidebar;
