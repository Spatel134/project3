import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";


const Item = ({ item: { _id, name, category, addedBy, date, expiration }}) => {

    return (
        <tr> 
            <td>{name}</td>
            <td>{category}</td>
            <td>{addedBy}</td>
            <td>{moment(date).format("MM-DD-YYYY")}</td>
            <td>{moment(expiration).format("MM-DD-YYYY")}</td>
            <td><Link
              to={`/api/locations/items/${_id}/edit`}
              className="waves-effect waves-light btn"
            >
              Edit
            </Link></td>
        </tr>
    )
}
export default Item;