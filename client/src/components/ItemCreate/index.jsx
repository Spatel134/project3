import { useHistory } from 'react-router-dom'
import ItemForm from '../ItemForm/ItemForm'
import React from 'react'
import axios from 'axios'
import AdminSideNav from '../AdminSideNav'
import { useContext, useEffect } from 'react'
import AdminContext from '../../Context/AdminContext'
import M from 'materialize-css'

const ItemAdd = () => {
  // useEffect(() => {
  //
  // },[])}

  useEffect(() => {
    M.AutoInit()
  })

  const { admin, setAdmin } = useContext(AdminContext)
  const history = useHistory()
  const handleFormSubmit = (event, formObject) => {
    event.preventDefault()
    console.log(formObject.name)
    !formObject.name
      ? M.toast({ html: 'Please enter a descriptive name for your item' })
      : !formObject.addedBy
      ? M.toast({ html: 'Please enter a valid email address' })
      : !formObject.expiration
      ? M.toast({ html: 'Please enter an expiration date for your item' })
      : !formObject.category
      ? M.toast({
          html: 'Please choose a corresponding category for your item'
        })
      : axios
          .post('/api/items', formObject)
          .then(response => {
            history.push(`/locations/${response.data._id}`)
          })
          .catch(err => {
            console.log(err)
          })
  }

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
              <ItemForm
                handleFormSubmit={handleFormSubmit}
                buttonText='Add Item'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemAdd
