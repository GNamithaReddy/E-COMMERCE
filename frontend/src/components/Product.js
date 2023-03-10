import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3'>
      <Link to={`/product/${product._id}`}>
      <Card.Img src={product.image} variant='top' height={190}/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
        <Card.Title as='div'>
          <strong><b>{product.name}</b></strong>
        </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color='gold'/>
        </Card.Text>
        
        <Card.Text as='h5'>₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
