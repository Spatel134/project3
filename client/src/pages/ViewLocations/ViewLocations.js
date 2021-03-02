import React, { useState, useEffect } from 'react';
import Sidenav from '../../components/Sidenav';
import Location from '../../components/Location/Location';
import axios from "axios";



const ViewLocations = () => {
    const [locations, setLocations] = useState([]);

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
        <>
            <Sidenav />

            <div className="container">

                <div className="row">
                    <div className="col s12">
                        <h4 className="center-align">Scroll for Different Fridges</h4>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            {locations.map(({ name, _id }) => (<Location name={name} id={_id} colSize={colSize} />))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ViewLocations;