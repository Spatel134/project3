import React from 'react';
import Item from "../../components/Item/Item";

const SingleLocation = () => {
    const items =
        [
            {
                name: "Peanut Butter",
                category: "Pantry",
                addedBy: "1/1/2021",
                date: "11/13/2020",
                expiration: "02/01/2022"
            },
            {
                name: "Whole Milk",
                category: "Fridge",
                addedBy: "11/15/2020",
                date: "11/13/2020",
                expiration: "11/20/2020"
            }
        ]


    return (
        <div >
            {items.map(item => (
                <Item item={item} />
            ))}
        </div>
    )
}
export default SingleLocation;