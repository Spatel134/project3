import React from "react";
import M from "materialize-css";
import { useState, useEffect } from "react";
import Sidenav from "../../components/Sidenav";
// import ItemCreate from "../../components/ItemCreate";

const About = () => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Lfg!");
    setName("");
    setStreet("");
    setCity("");
    setState("");
    setZipcode("");
  };

  return (
    <>
      <Sidenav />
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <img
                className="responsive-img"
                src="   https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg"
                alt="Colorfully designed community fridge"
              />
            </div>
            <div className="col s6">
              <form className="col s12" onSubmit={handleFormSubmit}>
                <div className="input-field col s12  l12">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="validate"
                    placeholder="Fox Farm location"
                  />
                  <label className="active" htmlFor="name">
                    Location Name
                  </label>
                </div>
                <div className="input-field col s12 l12">
                  <input
                    id="street"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                    type="text"
                    className="validate"
                    placeholder="1201 Surf Ave"
                  />
                  <label htmlFor="addedBy" className="active">
                    Street Address
                  </label>
                </div>

                <div className="input-field col s8">
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="validate"
                    placeholder="Brooklyn"
                  />

                  <label className="active" htmlFor="expiration">
                    City
                  </label>
                </div>
                <div className="input-field col s4">
                  <input
                    id={state}
                    type="text"
                    value=""
                    onChange={(event) => setState(event.target.value)}
                    className="validate"
                    placeholder="New York"
                  />

                  <label className="active" htmlFor="expiration">
                    State
                  </label>
                </div>
                <div className="input-field col s8">
                  <input
                    id="zipcode"
                    type="text"
                    value={zipcode}
                    onChange={(event) => setZipcode(event.target.value)}
                    className="validate"
                    placeholder="11224"
                  />

                  <label className="active" htmlFor="expiration">
                    Zipcode
                  </label>
                </div>
                <a href="/#" className="waves-effect waves-light btn">
                  Add Item
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
