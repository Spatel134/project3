import React from "react";
import LocationCreateForm from "../../components/LocationCreateForm";
import DeleteLocation from "../../components/DeleteLocation";
import Sidenav from "../../components/Sidenav";
const CreateLocation = () => {
  return (
    <>
      <Sidenav />

      <div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <DeleteLocation />
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

export default CreateLocation;
