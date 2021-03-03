import React from "react";
import axios from "axios";
import M from "materialize-css";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const DeleteLocation = () => {
  const [locations, setLocations] = useState([]);

  const history = useHistory();

  useEffect(() => {
    M.AutoInit();

    axios
      .get(`/api/locations`)
      .then((response) => {
        console.log(response);
        setLocations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteClick = (_id, name) => {
    console.log(name);
    axios
      .delete(`/api/locations/${_id}`)
      .then((response) => {
        console.log(response.data);
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
                <strong>Edit Location</strong>
                {/* 


            Todo: add below route to edit route. For now the  route just goes to the page.

               <Link to={`/api/locations/${_id}/edit`}>
            
            
            */}

                <Link to={`/api/locations/${_id}`}>
                  <a href="javascript:void(0);">
                    <i className="material-icons">edit</i>
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

export default DeleteLocation;
