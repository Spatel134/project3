import React from "react";
import axios from "axios";
import M from "materialize-css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const LocationUpdateView = () => {
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

  const handleDeleteClick = (_id, name) => {
    axios
      .delete(`/api/locations/${_id}`)
      .then((response) => {
        M.toast({ html: `${name} has been removed! ` });
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      {locations.map(({ name, city, state, street, _id }) => (
        <div className="row">
          <ul className="collection">
            <li className="collection-item avatar">
              <i className=" material-icons circle red">location_on</i>
              <span className="title">
                <strong>{name}</strong>
              </span>
              <p>
                <strong>{street}</strong>
                <br />
                <strong>{city} </strong>
                <br />
                <strong>{state} </strong>
                <br />
                <strong>Manage Location</strong>

                <Link to={`/admin/location/create`}>
                  <a href="javascript:void(0);">
                    <i className="material-icons">location_on</i>
                  </a>
                </Link>
              </p>
              <a href="javascript:void(0);" className="secondary-content">
                <i
                  className="material-icons"
                  onClick={() => {
                    handleDeleteClick(_id, name);
                  }}
                >
                  delete
                </i>
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LocationUpdateView;
