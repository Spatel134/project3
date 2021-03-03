import React from 'react';
import LocationUpdateView from "../../components/LocationUpdateView"
import LocationUpdateForm from "../../components/LocationUpdateForm"
import AdminSideNav from '../../components/AdminSideNav';
import { useContext } from 'react';
import AdminContext from "../../Context/AdminContext"

const LocationUpdate = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  return (
    <>
      <AdminSideNav admin={admin} />
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