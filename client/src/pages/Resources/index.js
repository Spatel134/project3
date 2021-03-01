import React from "react";
import ResourceCard from "../../components/ResourceCard";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      <>
        <nav> </nav>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="https://i.imgur.com/OqH4GUk.jpg" />
              </div>
              <a href="#user"></a>
              <img className="circle" src="https://www.clipartmax.com/png/middle/269-2691367_user-login-person-man-enter-comments-logo.png" />
              <a href="#name">
                <span className=""> </span>
              </a>
              <a href="#email">
                <span className=""></span>
              </a>
            </div>
          </li>
          <li>
            <Link to="/">
              <a>
                <i className=" material-icons">home</i> Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="/locations">
              <a>
                <i className=" material-icons">location_on</i> View Locations
              </a>
            </Link>
          </li>
          <li>
            <Link to="/resources">
              <a>
                <i className=" material-icons">whatshot</i> Resources
              </a>
            </Link>
          </li>
          <li>
            {/* 
      
      To do: Add a contact page
      
    */}

            {/* <Link to="/resources"> */}
            <a>
              <i className=" material-icons">phonelink</i> Contact
            </a>
            {/* </Link> */}
          </li>

          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Authorized Users Only</a>
          </li>
          <li>
            <Link to="/admin">
              <a>
                <i className=" material-icons">account_box</i> Admin
              </a>
            </Link>
    <li>
      <Link to="/forms">
        <a>
          <i className=" material-icons">add</i> Add Items
        </a>
      </Link>
    </li>
          </li>
        </ul>
        <a href="html#" data-target="slide-out" className="sidenav-trigger">
          <i className=" grey-text large material-icons">kitchen</i>
        </a>

        <div className="container">
          <h2>Resources</h2>
          <hr />
          <p className="flow-text">
            Whether you are a seasoned user at making deposits, first time
            receiver of food from the fridge, or are looking for a way to help
            those in your community, you will find resources that will make
            implementing a community fridge project in your neighborhood much
            easier.
          </p>
          <br />
          <iframe
            width="100%vw"
            height="480"
            src="https://www.youtube.com/embed/y0M4DjVzX_c"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <br />
          <br />
          <div className="row">
            <div className="col s5">
              <p className="flow-text">
                All around the world communities are coming together to empower
                those in need and combat food insecurity with two simple goals:
                <strong>
                  {" "}
                  Reducing food waste and feeding the community.{" "}
                </strong>
                <br />
                Fill out this form to add your location to this growing network
                of community fridges.
              </p>
              <a
                style={{ display: "table-cell" }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSf62uCah6cVYDrp0hlMPhCOU07AX6Fq35JP--Ris-CBGheM2w/viewform"
                target="_blank"
                class="btn-floating btn-large waves-effect waves-light red"
              >
                <i class=" material-icons">group_add</i>
              </a>
            </div>
            <div className="col s7">
              <iframe
                title="Freedge Locations around the world"
                src="https://www.google.com/maps/d/embed?mid=1XHFY6ZwXmWOfuLIxZ84aSyireAy64azl"
                width="100%vw"
                height="400"
              ></iframe>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <ResourceCard />
          </div>
          <section />
        </div>
      </>
    </div>
  );
};

export default Resources;
