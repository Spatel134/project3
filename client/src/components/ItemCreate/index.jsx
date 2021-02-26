import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const ItemAdd = () => {
  return (
    <div>
      <div className='container'>
        <nav className='transparent waves-effect waves-cyan'> </nav>
        <div className='row'>
          <div className='col s6'>
            <img
              className='responsive-img'
              src='   https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg'
              alt="Colorfully design community fridge"
            />
          </div>
          <div className='col s6'>
            <form className='col s12'>
              <div className='input-field col s12  l12'>
                <input
                  id='name'
                  type='text'
                  className='validate'
                  placeHolder='Nature Valley granola bar'
                />
                <label className='active' for='name'>
                  {' '}
                  Item Name
                </label>
              </div>
              <div className='input-field col s12 l12'>
                <input
                  id='addedBy'
                  type='text'
                  className='validate'
                  placeHolder='johndough@gmail.com'
                />
                <label className='active' for='addedBy'>
                  Added by
                </label>
              </div>
              <div className='input-field col s12'>
                <input id='date' type='date' className='validate' />
                <label className='active' for='expiration'>
                  Expiration Date
                </label>
              </div>
              <div className='input-field col s12'>
                <select>
                  <option value='' disabled selected>
                    Choose your option
                  </option>
                  <option value='1'>Frozen</option>
                  <option value='2'>Produce</option>
                  <option value='3'>Pantry</option>
                  <option value='4'>Personal Care</option>
                </select>
                <label>Category</label>
              </div>
              <a className='waves-effect waves-light btn'>Add Item</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemAdd
