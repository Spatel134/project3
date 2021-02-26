import React from 'react';
const Item = ({ item: { name, category, addedBy, date, expiration } }) => {

    return (
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{addedBy}</td>
            <td>{date}</td>
            <td>{expiration}</td>
        </tr>
    )
}
export default Item;