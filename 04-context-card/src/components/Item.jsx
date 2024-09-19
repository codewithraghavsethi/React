import React from 'react'

const Item = (props) => {
  return (
    <div className='item-card'>
      <h4>Item: {props.name}</h4>
      <p>Price: ${props.price}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default Item
