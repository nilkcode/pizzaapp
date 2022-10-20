import React from 'react'
import { useState } from 'react';
import { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext';

const Product = (props) => {
  

  const {product} = props;
  const{cart,setCart} = useContext(CartContext);
  const[isAdding,setIsAdding]= useState(false);
 
  useEffect( () => {
    //  console.log(product)
  },[product])

  const addToCart = (event ,product) => {
   event.preventDefault();
   let _cart = {...cart}

   if(!_cart.items){
       _cart.items = {};
   } 

   if(_cart.items[product._id ]){
     _cart.items[product._id ] = _cart.items[product._id ] + 1;

   }else{
    _cart.items[product._id ] = 1;
   }
   
   if(!_cart.totalItems){
    _cart.totalItems = 0;
   }

   _cart.totalItems += 1;

   setCart(_cart);
   setIsAdding(true);

   setTimeout(() => {
     setIsAdding(false)
   },1000)


  }

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
              <button   disabled={isAdding}  onClick={(e) => {addToCart(e,product)}} className={`${isAdding ? 'bg-green-500':'bg-yellow-500'} py-1 px-4 rounded-full text-black font-bold  bg-yellow-500 hover:bg-yellow-600`}>Add{isAdding ? 'ed': ''}</button>
              </div>
       
    </Link>
    </>     
           
      
   
  )
}

export default Product;