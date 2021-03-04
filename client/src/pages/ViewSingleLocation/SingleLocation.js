import React, { useEffect, useState, useContext } from "react";
import Item from "../../components/Item/Item";
import { useParams, useLocation } from "react-router";
import axios from "axios";
import Sidenav from "../../components/Sidenav";
import AdminSideNav from "../../components/AdminSideNav";
import AdminContext from "../../Context/AdminContext"


const SingleLocation = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const [location, setLocation] = useState({});
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    // const id = window.location.pathname.split("/");
    axios
      .get("/api/locations/" + id)
      .then(({ data: { items, ...locationInfo } }) => {
        setLocation(locationInfo);
        setItems(items);
      });
  };
  const currentLocation = useLocation().pathname;
  return (
    <>
      {currentLocation.includes('admin') ? <AdminSideNav admin={admin} /> : <Sidenav />}


      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4 className="center-align">{location.name}</h4>
          </div>
          <div className="col s12">
            <p className="center-align">
              <strong>Located: </strong>
              {`${location.street}, ${location.city}, ${location.state}, ${location.zipcode}`}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Item Added By</th>
                  <th>Date Added</th>
                  <th>Expiration</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <Item item={item} locationId={location._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleLocation;
