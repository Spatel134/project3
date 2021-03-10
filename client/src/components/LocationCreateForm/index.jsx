import React from "react";
import axios from "axios";
import M from "materialize-css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const LocationCreateForm = () => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setStates] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [image, setImage] = useState("");
  const [locations, setLocations] = useState([]);

  const history = useHistory();

  useEffect(() => {
    M.AutoInit();

    axios
      .get(`/api/locations`)
      .then((response) => {
        setLocations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFormSubmit = (event) => {
    let isnum = /^\d+$/.test(zipcode);
    event.preventDefault();
    !isnum
      ? M.toast({ html: "Please enter a VALID zip code!" })
      : !name
      ? M.toast({ html: "Please enter a location name" })
      : !city
      ? M.toast({ html: "Please enter a city" })
      : !state
      ? M.toast({ html: "Please enter a state" })
      : !street
      ? M.toast({ html: "Please enter a street " })
      : !image
      ? M.toast({
          html: "Please enter a link to the url of the image of your location",
        })
      : zipcode.length > 5 || zipcode.length < 5
      ? M.toast({ html: "Please enter a zip code that consists of 5 numbers " })
      : axios
          .post("/api/locations", {
            name,
            street,
            city,
            state,
            zipcode,
            image,
          })
          .then((response) => {
            setName("");
            setStreet("");
            setCity("");
            setStates("");
            setZipcode("");
            setImage("");

            M.toast({ html: "Your location has been added successfully!" });
            history.go(0);
          })
          .catch((err) => {
            console.log(err);
          });
  };

  return (
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
          id="state"
          type="text"
          value={state}
          onChange={(event) => setStates(event.target.value)}
          className="validate"
          placeholder="New York"
        />

        <label className="active" htmlFor="expiration">
          State
        </label>
      </div>
      <div className="input-field col s10">
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
      <div className="input-field col s12 l12">
        <input
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="text"
          className="validate"
          placeholder="https://picsum.photos/536/354"
        />
        <label htmlFor="addedBy" className="active">
          Image Link
        </label>
      </div>

      <button className="waves-effect waves-light btn">Add Item</button>
    </form>
  );
};

export default LocationCreateForm;
