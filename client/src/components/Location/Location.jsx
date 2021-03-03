import React from 'react'
import { Link } from 'react-router-dom'

const Location = ({ name, id, image, city, street, zipcode, state }) => {
  return (
    <div className='col l3 m3 s3 xs3'>
      <div className='card'>
        <div className='card-image'>
          <img alt={name} src={image} />

          <span className='card-title'></span>
          <Link to={`/locations/${id}`}>
            <a
              href='/#'
              className='btn-floating halfway-fab waves-effect waves-light red'
            >
              <i className='material-icons'>location_on</i>
            </a>
          </Link>
        </div>
        <div className='card-content'>
          <strong>{name}</strong>
          <hr />
          <p>{street}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{zipcode}</p>
        </div>
      </div>
    </div>
  )
}

export default Location
