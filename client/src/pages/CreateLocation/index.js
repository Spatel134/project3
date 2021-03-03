import React, { useContext } from "react";
import M from 'materialize-css'
import { useEffect } from 'react';
import AdminContext from "../../Context/AdminContext"
import AdminSideNav from "../../components/AdminSideNav";




const CreateLocation = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const { admin, setAdmin } = useContext(AdminContext);
  return (
    <>
      <AdminSideNav admin={admin} />

      <div>
        <div className='container'>
          <div className='row'>
            <div className='col s6'>
              <img
                className='responsive-img'
                src='   https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg'
                alt='Colorfully designed community fridge'
              />
            </div>
            <div className='col s6'>
              <form className='col s12'>
                <div className='input-field col s12  l12'>
                  <input
                    id='name'
                    type='text'
                    value=""
                    onChange={event => (event.target.value)}
                    className='validate'
                    placeholder='Nature Valley granola bar'
                  />
                  <label className='active' htmlFor='name'>

                    Location Name
              </label>
                </div>
                <div className='input-field col s12 l12'>
                  <input
                    id='street'
                    value=""
                    onChange={event => (event.target.value)}
                    type='text'
                    className='validate'
                    placeholder='johndough@gmail.com'
                  />
                  <label htmlFor='addedBy' className='active'>
                    Street Address
              </label>
                </div>
                <div className='input-field col s8'>
                  <input
                    id='city'
                    type='text'
                    value=""
                    onChange={event => (event.target.value)}
                    className='validate'
                  />
                  <label className='active' htmlFor='expiration'>
                    Expiration Date
              </label>
                </div>
                <div className='input-field col s12'>
                  <select
                    value=""
                    onChange={event => (event.target.value)}
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
                    onChange={event => (event.target.value)}
                  >
                    {/* 
                
                Behavior of the dropdown is strange, it is selecting a fridge but not getting
                the list of all of the fridges 
                
                */}
                    <option value='' disabled defaultValue>
                      Choose your option
                </option>

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
  );
};

export default CreateLocation;
