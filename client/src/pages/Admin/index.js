import React from "react";
import axios from "axios";
import M from "materialize-css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DeleteLocation from "../../components/LocationDelete";
import LocationCreateForm from "../../components/LocationCreateForm";

import Sidenav from "../../components/Sidenav";

const About = () => {
  return (
    <>
    <Sidenav/>
   {/* 
   
   Todo: add something that links to other pages or llink login directly to /admin/location/create
   
   
   */}
    </>
  );
};

export default About;
