import React from "react";
import ResourceCard from "../../components/ResourceCard";
const Resources = () => {
  return (
    <div>
      <>
        <nav> </nav>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/office.jpg" />
              </div>
              <a href="#user">
                <img className="circle" src="images/yuna.jpg" />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <section>
          <img
            src="https://www.ediblemanhattan.com/wp-content/uploads/2020/08/walter-wlodarczyk-2020-05-19-_87A9756.jpg"
            width="100%vw"
          />
        </section>
        <div className="container">
          <h2>Resources</h2>

          <p className="flow-text">
            Whether you are a seasoned Depositer, first time receiver, or just
            looking for a way to help those in your community, you will find
            resources that will make implementing a community fridge project in
            your neighborhood much easier.
          </p>
          <br />
          <iframe
            width="100%vw"
            height="480"
            src="https://www.youtube.com/embed/o6Yc--wIsPU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <div className="row">
            <div className="col s4">
              <p className="flow-text">
                All around the world communities are coming together to empower
                those in need and combat food insecurity with two simple goals:
                <strong> Reducing food waste and feeding the community.</strong>
              </p>
            </div>
            <div className="col s8">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1XHFY6ZwXmWOfuLIxZ84aSyireAy64azl"
                width="100%vw"
                height="400"
              ></iframe>
            </div>
          </div>
        </div>
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
