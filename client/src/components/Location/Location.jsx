import React from 'react';
import { Link } from 'react-router-dom'

const Location = ({ name, id, colSize }) => {
    console.log(id)
    return (
        <div className={`col s${colSize}`}>
            <div class="card">
                <div class="card-content" style={{ color: "#ee6e73" }}>
                    <span class="card-title">{name}</span>

                </div>
                <div class="card-action">
                    <Link to={`/api/locations/${id}`} style={{ color: "#ee6e73" }}>Click here to View</Link>
                </div>
            </div>
        </div>
    )
}

export default Location;