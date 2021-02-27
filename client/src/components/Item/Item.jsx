import React from 'react';
import moment from 'moment';

const Item = ({ item: { name, category, addedBy, date, expiration } }) => {

    return (
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{addedBy}</td>
            <td>{moment(date).format("MM-DD-YYYY")}</td>
            <td>{moment(expiration).format("MM-DD-YYYY")}</td>
        </tr>
    )
}
export default Item;