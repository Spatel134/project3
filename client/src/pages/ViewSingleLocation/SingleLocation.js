import React, { useEffect, useState } from 'react';
import Item from "../../components/Item/Item";
import axios from 'axios';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar';

const SingleLocation = () => {
    const [location, setLocation] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = () => {
        const id = window.location.pathname.split("/");

        axios.get("/api/locations/" + id[3]).then(({ data: { items, ...locationInfo } }) => {
            setLocation(locationInfo);
            setItems(items)
        });
    }


    return (
        <>
            <Sidebar title="Community Fridge" />

            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4 className="center-align">{location.name}</h4>
                    </div>
                    <div className="col s12">
                        <p className="center-align">
                            Located in:{" "}
                            {`${location.street}, ${location.city}, ${location.state}, ${location.zipcode}`}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>category</th>
                                    <th>addedBy</th>
                                    <th>date</th>
                                    <th>expiration</th>
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((item) => (
                                    <Item item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SingleLocation;