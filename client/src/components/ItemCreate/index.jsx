import { useHistory } from "react-router-dom";
import ItemForm from "../ItemForm/ItemForm";
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Sidenav from '../Sidenav'
import M from "materialize-css";

const ItemAdd = () => {
  const history = useHistory();
  console.log("Add form loaded")

  const handleFormSubmit = (event, formObject) => {
    event.preventDefault();
    axios
      .post("/api/items", formObject)
      .then((response) => {
        console.log(response.data);

        history.push(`/api/locations/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Sidenav />
      <div>
        <div className="container">
          <nav className="transparent waves-effect waves-cyan"> </nav>
          <div className="row">
            <div className="col s6">
              <img
                className="responsive-img"
                src="   https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg"
                alt="Colorfully designed community fridge"
              />
            </div>
            <div className="col s6">
              <ItemForm
                handleFormSubmit={handleFormSubmit}
                buttonText="Add Item"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemAdd;
