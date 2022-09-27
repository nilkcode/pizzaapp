import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Product = (props) => {

  const {product} = props;
 
  useEffect( () => {
      console.log(product)
  },[product])


  return (
   <>
    <Link to={`/products/${product._id}`}>
       <img src={product.image} alt='pizza'></img>
            <div className='text-center'>
              <h2 className="text-lg font-bold py-2">{product.name}</h2>
              <span className='bg-gray-200 py-1 rounded-full text-sm px-4 text-center'>{product.size}</span>
            </div>
            
            <div className='flex justify-between my-1' style={{alignItems:'center'}}>
              <span>${product.price}</span>
              <button className='py-1 px-4 rounded-full text-black font-bold  bg-yellow-500 hover:bg-yellow-600'>Add</button>
              </div>
       
    </Link>
    </>     
           
      
   
  )
}

export default Product