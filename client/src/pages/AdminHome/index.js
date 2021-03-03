import React, { useContext } from 'react';
import AdminSideNav from "../../components/AdminSideNav";
import { useParams, Link } from "react-router-dom";
import AdminContext from "../../Context/AdminContext"


const AdminHome = () => {
    const { adminId } = useParams();
    const { admin, setAdmin } = useContext(AdminContext);
    return (
        <>
            <AdminSideNav admin={admin} />
            {console.log(admin)}
            <div class="section white">
                <div class="row container">
                    <h2 className="center-align">Welcome {admin.email}</h2>
                </div>

                <div className="row">


                    <div class="col s6">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">View Location</span>
                                <p> Viewing different fridge locations</p>
                            </div>
                            <div class="card-action">
                                <Link to="/admin/location/view">Click Here To View Locations</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Create a Location</span>
                                <p>Creating a new fridge</p>
                            </div>
                            <div class="card-action">
                                <Link exact to="/admin/location/create">Click Here to Create a New Fridge</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col s4">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                      I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>




        </>
    )
}

export default AdminHome;