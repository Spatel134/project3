import React from 'react'
import { Link } from 'react-router-dom'

const Location = ({
  name,
  id,
  colSize,
  image,
  city,
  street,
  zipcode,
  state
}) => {
  console.log(image)
  return (
    // <div className={`col s${colSize}`}>
    //   <div className='card'>
    //     <div className='card-content' style={{ color: '#ee6e73' }}>
    //       <span className='card-title'>{name}</span>
    //     </div>
    //     <div className='card-action'>
    //       <Link to={`/api/locations/${id}`} style={{ color: '#ee6e73' }}>
    //         Click here to View
    //       </Link>

    //     </div>
    //   </div>
    // </div>

    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={image} />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {name} <i className='material-icons right'>more_vert</i>
        </span>
        <Link to={`/api/locations/${id}`} style={{ color: '#ee6e73' }}>
          <p>
            Click here to items at this location
     
          </p>
        </Link>
      </div>
      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>
          {name}
          <i className='material-icons right'>close</i>
        </span>
        <p>{street}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{zipcode}</p>
      </div>
    </div>
  )
}

export default Location
