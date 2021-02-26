import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Location from '../../components/Location/Location';
import axios from "axios";
import Sidebar from '../../components/Sidebar';

const ViewLocations = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        loadLocation();
    }, [])
    const loadLocation = () => {

        axios.get("/api/locations").then(res => {
            console.log(res.data)
            setLocations(res.data)
        })
    }
    let colSize;
    if (12 % locations.length === 0 && 12 > locations.length) {
        console.log("fisrt statment");
        colSize = 12 / locations.length;
        console.log(colSize)

    } else {
        console.log("second statment")
        colSize = 6;
    }


    return (
        <div className="container">
            <Header title="View Locations" />

            <div className="row">
                <div className="col s12">
                    <h4 className="center-align">Scroll for Different Fridges</h4>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {locations.map(({ name, _id }) => (<Location name={name} id={_id} colSize={colSize} />))}
                </div>
            </div>
        </div>
    )
}
export default ViewLocations;