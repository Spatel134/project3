import React from "react";
import M  from 'materialize-css'
import { useEffect } from 'react';
import Sidenav from '../../components/Sidenav'


const About = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <Sidenav/>
   
  );
};

export default About;
