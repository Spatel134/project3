import React from "react";
import LocationCreateForm from "../../components/LocationCreateForm";
import LocationDelete from "../../components/LocationDelete";
import Sidenav from "../../components/Sidenav";
const LocationCreate = () => {
  return (
    <>
      <Sidenav />

      <div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <LocationDelete />
            </div>
            <div className="col s6">
              <LocationCreateForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCreate;
