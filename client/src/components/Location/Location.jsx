import React from 'react';
import { Link } from 'react-router-dom'

const Location = ({ name, colSize }) => {
    return (
        <div className={`col s${colSize}`}>
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{name}</span>

                </div>
                <div class="card-action">
                    <Link to="/single-fridge">Click here to View</Link>
                </div>
            </div>
        </div>
    )
}

export default Location;