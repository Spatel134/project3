import React from "react";
import image from "../../assets/images/community-fridge.jfif";
import { Link } from "react-router-dom";
import Sidenav from "../../components/Sidenav";
import "../Home/style.css";
const Home = () => {
  return (
    <>
      <Sidenav title="Community Fridge" />
      <div className="parallax-container">
        <div className="parallax">
          <img src={image} alt="New Your based community fridge" />
        </div>
        <div style={{ position: "absolute", top: "30%", left: "20%" }}>
          <h1 style={{ color: "aliceblue" }}>
            Click Here to View The Location of The Fridges
          </h1>
          <Link to="/locations" className="waves-effect waves-dark btn-large">
            View Fridges
          </Link>
        </div>
      </div>
      <div className="row container">
        <h2 className="Sidenav">What is a community fridge?</h2>
        <p className="grey-text text-darken-3 lighten-3">
          A community fridge is a refrigerator that is placed in a public space
          to enable food to be shared, at no cost, within a community. Community
          Chest is a sharing mechanism aiming to reduce food insecurity and food
          waste, building a stronger community.
          <br />
          <br />
          We promote equal access to healthy food through the installation of
          community fridges (public refrigerators) that are used to share food
          and ideas at the neighborhood level.
        </p>
      </div>
      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img  height= "250%" width="200%" src="https://cdn.vox-cdn.com/thumbor/D6K5ertNhbaTNs7Wd6NWv5CpKbs=/0x0:5764x3018/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20008745/CommunityFridgeBK_photoAdelaWagner_1.jpg" />
              <span className="card-title">Depositors stock </span>
            </div>
            <div className="card-content">
              <p>
                Community Chest allows users to stock and maintain the fridge to
                keep an accurrate inventory of whats in the fridge.
              </p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img height= "250%" width="200%"  src="https://d279m997dpfwgl.cloudfront.net/wp/2020/09/0911_community-fridge06.jpg" />
              <span className="card-title">Shoppers shop </span>
            </div>
            <div className="card-content">
              <p>
                Shoppers can use Community Chest to see what is in the fridge to
                let them know what is in the fridge before they go!
              </p>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img height= "250%" width="200%"  src="https://supercharged.wpengine.com/wp-content/uploads/2015/06/HEALTHY-LATIN-2.jpg" />
              <span className="card-title">Families eat </span>
            </div>
            <div className="card-content">
              <p>
                Shoppers use the ingredients to make delicious meals for their
                families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
