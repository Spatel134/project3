import React from "react";
import { Paper } from "@material-ui/core";
import img from "../../assets/images/names.png";
import "./index.css";

const Footer = () => {
  return (
    <Paper id="footer">
      {/* <footer > */}
      <div className="row">
        <div className="valign-wrapper col s12">
          <div className="col s4">
            <h6>© 2021 Copyright </h6>
          </div>
          <div className="center-align col s4">
            <img src={img} width="75" />
          </div>
          <div className="center-align col s4">
            {/* <img src={img} width="75" /> */}
          </div>
        </div>
      </div>
      {/* </footer> */}
    </Paper>
  );
};

export default Footer;
