import React, { useState, useEffect } from "react";
import Sidenav from "../../components/Sidenav";
import Location from "../../components/Location/Location";
import axios from "axios";

const ViewLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    loadLocation();
  }, []);
  const loadLocation = () => {
    axios.get("/api/locations").then((res) => {
      console.log(res.data);
      setLocations(res.data);
    });
  };

  return (
    <>
      <Sidenav />

      <div className="container">
        <div className="row">
          {locations.map(
            ({ name, _id, image, street, city, state, zipcode }) => (
              <Location
                name={name}
                id={_id}
                image={image}
                street={street}
                city={city}
                state={state}
                zipcode={zipcode}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
export default ViewLocations;
