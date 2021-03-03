import React from 'react';
import LocationDelete from "../../components/LocationDelete";
import Sidenav from "../../components/Sidenav";
import LocationUpdateView from "../../components/LocationUpdateView"
import LocationUpdateForm from "../../components/LocationUpdateForm"
const LocationUpdate = () => {
    return (
        <>
        <Sidenav />
        <div>
          <div className="container">
            <div className="row">
              <div className="col s6">
                <LocationUpdateView />
              </div>
              <div className="col s6">
                <LocationUpdateForm />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default LocationUpdate;