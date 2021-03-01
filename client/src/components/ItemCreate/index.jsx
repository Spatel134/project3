import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Header from '../Header/Header'
import M from "materialize-css";


const ItemAdd = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [addedBy, setAddedBy] = useState('')
  const [expiration, setExpiration] = useState('')
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')

  useEffect(() => {
    M.AutoInit();
    axios
      .get('api/locations', { responseType: 'json' })
      .then(response => {
        setLocations(response.data)
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const handleFormSubmit = event => {
    event.preventDefault()

    // useEffect to get location id from an axios call
    // set response to locationchoice state and use that to map[ over a dropdown choices]

    axios
      .post('/api/items', {
        name,
        category,
        addedBy,
        expiration,
        selectedLocation
      })
      .then(response => {
        console.log(response.data)

        // Reset Form Inputs
        setName('')
        setCategory('')
        setAddedBy('')
        setExpiration('')
        // Todo clear category
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Header />
      <div>
        <div className='container'>
          <nav className='transparent waves-effect waves-cyan'> </nav>
          <div className='row'>
            <div className='col s6'>
              <img
                className='responsive-img'
                src='   https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg'
                alt='Colorfully designed community fridge'
              />
            </div>
            <div className='col s6'>
              <form className='col s12' onSubmit={handleFormSubmit}>
                <div className='input-field col s12  l12'>
                  <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={event => setName(event.target.value)}
                    className='validate'
                    placeholder='Nature Valley granola bar'
                  />
                  <label className='active' htmlFor='name'>
                    {' '}
                  Item Name
                </label>
                </div>
                <div className='input-field col s12 l12'>
                  <input
                    id='addedBy'
                    value={addedBy}
                    onChange={event => setAddedBy(event.target.value)}
                    type='text'
                    className='validate'
                    placeholder='johndough@gmail.com'
                  />
                  <label htmlFor='addedBy' className='active'>
                    Added by
                </label>
                </div>
                <div className='input-field col s12'>
                  <input
                    id='date'
                    type='date'
                    value={expiration}
                    onChange={event => setExpiration(event.target.value)}
                    className='validate'
                  />
                  <label className='active' htmlFor='expiration'>
                    Expiration Date
                </label>
                </div>
                <div className='input-field col s12'>
                  <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                  >
                    <option value='' disabled defaultValue>
                      Choose your option
                  </option>
                    <option value='Frozen'>Frozen</option>
                    <option value='Produce'>Produce</option>
                    <option value='Pantry'>Pantry</option>
                    <option value='Personal Care'>Personal Care</option>
                  </select>
                  <label>Category</label>
                </div>
                <div className='input-field col s12'>
                  <select
                    className="browser-default"
                    onChange={event => setSelectedLocation(event.target.value)}
                  >
                    {/* 
                  
                  Behavior of the dropdown is strange, it is selecting a fridge but not getting
                  the list of all of the fridges 
                  
                  */}
                    <option value='' disabled defaultValue>
                      Choose your option
                  </option>
                    {locations.map(location => (
                      <option key={location._id} value={location._id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                  <label className="active">Choose Location</label>
                </div>
                <button className='waves-effect waves-light btn'>Add Item</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemAdd
