import React from 'react';
import Header from '../../components/Header/Header';
import Location from '../../components/Location/Location';
import Sidebar from '../../components/Sidebar';

const ViewLocations = () => {
    const data = [
        {
            name: "Bed-Stuy Fridge",

        }
    ]
    let colSize;
    if (12 % data.length === 0 && 12 > data.length) {
        console.log("fisrt statment");
        colSize = 12 / data.length;
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
                    {data.map(({ name }) => (<Location name={name} colSize={colSize} />))}
                </div>
            </div>
        </div>
    )
}
export default ViewLocations;