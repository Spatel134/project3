import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import Sidenav from "../../components/Sidenav";
import Location from "../../components/Location/Location";
import axios from "axios";
import AdminContext from "../../Context/AdminContext";
import AdminSideNav from "../../components/AdminSideNav";

const ViewLocations = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    loadLocation();
  }, []);
  const loadLocation = () => {
    axios.get("/api/locations").then((res) => {
      setLocations(res.data);
    });
  };
  const currentLocation = useLocation().pathname;
  return (
    <>
      {currentLocation.includes("admin") ? (
        <AdminSideNav admin={admin} />
      ) : (
        <Sidenav />
      )}

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
