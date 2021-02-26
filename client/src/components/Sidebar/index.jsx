import React from "react";
import Header from "../Header/Header"

const Sidebar = () => {
  useEffect(() => {
    M.AutoInit();
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
      </ul>
    </div>
  );
};

export default Sidebar;
