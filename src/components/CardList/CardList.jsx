import React from 'react'
import Card from '../Card/Card';
import './CardList.css'
function CardList({data}) {
  return (
    <>
   
    <div className='card_list'>
            {data.map((card, index) => {
                return (
                    <Card
                    key={index}
                    image={card.picture.large}
                    name={card.name}
                    
                    />
                    );
                })}
        </div>
                </>
  )
}

export default CardList