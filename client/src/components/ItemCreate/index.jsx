import { useHistory } from "react-router-dom";
import ItemForm from "../ItemForm/ItemForm";
import React from "react";
import axios from "axios";
import AdminSideNav from "../AdminSideNav";
import { useContext } from 'react';
import AdminContext from "../../Context/AdminContext"



const ItemAdd = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const history = useHistory();
  const handleFormSubmit = (event, formObject) => {
    event.preventDefault();
    axios
      .post("/api/items", formObject)
      .then((response) => {
        history.push(`/admin/locations/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AdminSideNav admin={admin} />
      <div>
        <div className="container">
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
