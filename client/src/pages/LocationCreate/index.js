import React from "react";
import AdminSideNav from "../../components/AdminSideNav";
import LocationCreateForm from "../../components/LocationCreateForm";
import LocationDelete from "../../components/LocationDelete";
import { useContext } from 'react';
import AdminContext from "../../Context/AdminContext"


const LocationCreate = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  return (
    <>
      <AdminSideNav admin={admin} />

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
