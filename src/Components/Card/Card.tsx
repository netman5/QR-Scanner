import React from 'react'
import { Movie } from '../../Types/appTypes'

const Card = ({ Title, Images }: Movie) => {
  return (
    <div>
      <h1>{Title}</h1>
      <img src={Images[0]} alt={Title} />
    </div>
  )
}

export default Card