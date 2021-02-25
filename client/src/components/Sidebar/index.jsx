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
      </ul>
      {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}

      {/* <script>
    $(document).ready(function () {
      $(".sidenav").sidenav();
    });
  </script> */}
    </div>
  );
};

export default Sidebar;
