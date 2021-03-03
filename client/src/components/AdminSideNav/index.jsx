import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { useEffect } from 'react';


const AdminSideNav = ({ admin }) => {
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
                            <img src='https://i.imgur.com/OqH4GUk.jpg' />
                        </div>

                        {/* 
      
      Add user picture to sidebar nav
      */}

                        <img
                            className='circle'
                            src='https://www.clipartmax.com/png/middle/269-2691367_user-login-person-man-enter-comments-logo.png'
                        />
                        <span className="white-text">Welcome! {admin.email}</span>

                    </div>
                </li>
                <li>
                    <Link to={`/admin/${admin._id}`}>
                        <a>
                            <i className=' material-icons'>home</i> Home
            </a>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/locations'>
                        <a>
                            <i className=' material-icons'>location_on</i> View Locations
            </a>
                    </Link>
                </li>
                <li>
                    <Link to='/admin/createlocation'>
                        <a>
                            <i className=' material-icons'>whatshot</i> Create Location
            </a>
                    </Link>
                </li>
                <li>
                    {/* 

To do: Add a contact page

*/}

                    {/* <Link to="/resources"> */}
                    <a>
                        <i className=' material-icons'>phonelink</i> Contact
          </a>
                    {/* </Link> */}
                </li>

                <li>
                    <div className='divider'></div>
                </li>

                <li>
                    <Link to='/'>
                        <a>
                            <i className=' material-icons'>account_box</i> SignOut
            </a>
                    </Link>
                    <li>
                        <Link to='/items'>
                            <a>
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
export default AdminSideNav;