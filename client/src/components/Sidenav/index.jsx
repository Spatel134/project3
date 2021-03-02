import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { useEffect } from 'react'

const Sidenav = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <>
      <nav> </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <div className='user-view'>
            <div className='background'>
              <img
                alt='gradient header background'
                src='https://i.imgur.com/OqH4GUk.jpg'
              />
            </div>

    
            <img
              alt='gender neutral user avatar'
              className='circle'
              src='https://www.clipartmax.com/png/middle/269-2691367_user-login-person-man-enter-comments-logo.png'
            />
            <a href='#name'>
              <span className=''></span>
            </a>
            <a href='#email'>
              <span className=''></span>
            </a>
          </div>
        </li>
        <li>
          <Link to='/'>
            <a href='/#'>
              <i className=' material-icons'>home</i> Home
            </a>
          </Link>
        </li>
        <li>
          <Link to='/locations'>
            <a href='/#'>
              <i className=' material-icons'>location_on</i> View Locations
            </a>
          </Link>
        </li>
        <li>
          <Link to='/resources'>
            <a href='/#'>
              <i className=' material-icons'>whatshot</i> Resources
            </a>
          </Link>
        </li>
        <li>
          {/* 

To do: Add a contact page

*/}

          {/* <Link to="/resources"> */}
          <a href='/#'>
            <i className=' material-icons'>phonelink</i> Contact
          </a>
          {/* </Link> */}
        </li>

        <li>
          <div className='divider'></div>
        </li>
        <li>
          <a href='/#' className='subheader'>
            Authorized Users Only
          </a>
        </li>
        <li>
          <Link to='/admin'>
            <a href='/#'>
              <i className=' material-icons'>account_box</i> Admin
            </a>
          </Link>
          <li>
            <Link to='/forms'>
              <a href='/#'>
                <i className=' material-icons'>add</i> Add Items
              </a>
            </Link>
          </li>
        </li>
      </ul>
      <a href='html#' data-target='slide-out' className='sidenav-trigger'>
        <i className=' grey-text large material-icons'>kitchen</i>
      </a>
    </>
  )
}
export default Sidenav