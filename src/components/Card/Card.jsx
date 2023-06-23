import React from 'react'
import './Card.css'
function Card({image,name}) {
  return (
    <div className='card'>
    <div className='card_image'>
        <img src={image} alt={name.first} />
    </div>
    <div className='card_info'>
        <h2>{name.title} {name.first} {name.last}</h2>
        
    </div>
</div>
  )
}

export default Card