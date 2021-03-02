import React, { useEffect, useState } from 'react';
import Item from "../../components/Item/Item";
import axios from 'axios';
import { useParams } from "react-router"
import Sidenav from '../../components/Sidenav';

const SingleLocation = () => {
    const [location, setLocation] = useState({});
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = () => {

        axios.get("/api/locations/" + id).then(({ data: { items, ...locationInfo } }) => {
            console.log(items);
            console.log(locationInfo)
            setLocation(locationInfo);
            setItems(items);
        });
    }


    return (
        <>
            <Sidenav />

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
                                    <Item item={item} locationId={location._id} />
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