import React from 'react'

const Card = (prop) => {
  return (
    <div>
      <h1 className='text-red-600'>Hello {prop.a}! How are you {prop.a} {prop.b} </h1>
    </div>
  )
}

export default Card
