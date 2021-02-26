import React from 'react';
const Item = ({ item: { name, category, addedBy, date, expiration } }) => {

    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}
export default Item;