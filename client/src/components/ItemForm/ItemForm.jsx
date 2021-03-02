import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import M from "materialize-css";
import { useParams } from "react-router-dom";

const ItemForm = (props) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [expiration, setExpiration] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    M.AutoInit();
    setLocations([]);
    axios
      .get("api/locations", { responseType: "json" })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setLocations(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (id) {
      axios
        .get(`/api/items/${id}`)
        .then((response) => {
          console.log(response.data);
          setName(response.data.name);
          setCategory(response.data.category);
          setAddedBy(response.data.addedBy);
          setExpiration(response.data.expiration);
          setSelectedLocation(response.data.location);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
        setName("");
          setCategory("");
          setAddedBy("");
          setExpiration("");
          
    }
  }, [id]);

  return (
    <form
      className="col s12"
      onSubmit={(e) =>
        props.handleFormSubmit(e, {
          name,
          category,
          addedBy,
          expiration,
          selectedLocation,
        })
      }
    >
      <div className="input-field col s12  l12">
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="validate"
          placeholder="Nature Valley granola bar"
        />
        <label className="active" htmlFor="name">
          {" "}
          Item Name
        </label>
      </div>
      <div className="input-field col s12 l12">
        <input
          id="addedBy"
          value={addedBy}
          onChange={(event) => setAddedBy(event.target.value)}
          type="text"
          className="validate"
          placeholder="johndough@gmail.com"
        />
        <label htmlFor="addedBy" className="active">
          Added by
        </label>
      </div>
      <div className="input-field col s12">
        <input
          id="date"
          type="date"
          value={expiration}
          onChange={(event) => setExpiration(event.target.value)}
          className="validate"
        />
        <label className="active" htmlFor="expiration">
          Expiration Date
        </label>
      </div>
      <div className="input-field col s12">
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled defaultValue>
            Choose your option
          </option>
          <option value="Frozen">Frozen</option>
          <option value="Produce">Produce</option>
          <option value="Pantry">Pantry</option>
          <option value="Personal Care">Personal Care</option>
        </select>
        <label>Category</label>
      </div>
      <div className="input-field col s12">
        <select
          id="location"
          className="browser-default"
          onChange={(event) => setSelectedLocation(event.target.value)}
        >
          {/* 
                  
                  Behavior of the dropdown is strange, it is selecting a fridge but not getting
                  the list of all of the fridges 
                  
                  */}
          <option value="" disabled defaultValue>
            Choose your option
          </option>
          {locations.map((location) => (
            <option key={location._id} value={location._id}>
              {location.name}
            </option>
          ))}
        </select>
        <label className="active">Choose Location</label>
      </div>
      <button className="waves-effect waves-light btn">
        {props.buttonText}
      </button>
    </form>
  );
};

export default ItemForm;
