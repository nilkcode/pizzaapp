import React from 'react'
import Product from './Product'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

   const[products , setProducts]= useState([])
    

   useEffect(()=>{
       fetch('https://star-spark-pasta.glitch.me/api/products')
       .then(response => response.json())
       .then(products => {
        setProducts(products)
            console.log(products)
       });
   },[])

   

  return (
    <div className='cont'>
      <h1  className='text-lg font-bold my-8'>Products</h1>
    
        <div className='grid grid-cols-5 my-8 gap-24 align-center'>
            {
              products.map(product => <Product key={product._id}  product={product}/>)
            }
          
        </div>   
     
    </div>
  )
}

export default Products
