import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { useEffect } from 'react'
import Logo from "../../assets/images/logo.png"

const AdminSideNav = ({ admin }) => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <>
      <nav>
        <a href='/#' className='brand-logo center'>
          <img alt='community chest logo' src={Logo} width='46%' />
        </a>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <div className='user-view'>
            <div className='background'>
              <img src='https://i.imgur.com/OqH4GUk.jpg' />
            </div>
            <img
              className='circle'
              src='https://www.clipartmax.com/png/middle/269-2691367_user-login-person-man-enter-comments-logo.png'
            />
            <span className='white-text'>Welcome! {admin.email}</span>
          </div>
        </li>
        <li>
          <Link to={`/admin/${admin._id}`}>
            <i className=' material-icons'>home</i> Home
          </Link>
        </li>
        <li>
          <Link to='/admin/location/view'>
            <i className=' material-icons'>location_on</i> View Locations
          </Link>
        </li>
        <li>
          <Link to='/admin/location/create'>
            <i className=' material-icons'>whatshot</i> Create Location
          </Link>
        </li>
        <li>
          <Link to='/admin/item/create'>
            <i className=' material-icons'>add</i> Add Items
          </Link>
        </li>
        <li>
          <Link to='/admin/location/create'>
            <i className=' material-icons'>edit_location</i> Manage Locations
          </Link>
        </li>
        <li>
          <Link>
            {' '}
            <i className=' material-icons'>phonelink</i> Contact
          </Link>
        </li>

        <li>
          <div className='divider'></div>
        </li>
        <li>
          <Link to='/'>
            <i className=' material-icons'>account_box</i> Sign Out
          </Link>
        </li>
      </ul>
      <a href='html#' data-target='slide-out' className='sidenav-trigger'>
        <i className=' black-text large material-icons'>kitchen</i>
      </a>
    </>
  )
}
export default AdminSideNav
