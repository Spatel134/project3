import React from 'react';
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ItemForm from "../ItemForm/ItemForm";

const ItemUpdate = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleFormSubmit = (event, formObject) => {
        event.preventDefault();
        axios
          .post(`/api/items/${id}`, formObject)
          .then((response) => {
            console.log(response.data);
    
            history.push(`/items/${response.data._id}`);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <div className='container'>
        <nav className='transparent waves-effect waves-cyan'> </nav>
        <div className='row'>
          <div className='col s6'>
            <img
              className='responsive-img'
              src='https://www.keynshamvoice.co.uk/images/news/FEB%202020/Example-of-an-existing-community-fridge.gif'
            />
          </div>
          <div className='col s6'>
          <ItemForm
                handleFormSubmit={handleFormSubmit}
                buttonText="Update Item"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemUpdate;
