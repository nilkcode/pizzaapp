import React from 'react'
import Product from './Product'
import {useState,useEffect ,useContext} from 'react'
import {CartContext} from '../CartContext'

const Products = () => {

 const{name} = useContext(CartContext);
  //console.log(name);

   const[products , setProducts]= useState([])
    

   useEffect(()=>{
       fetch('https://star-spark-pasta.glitch.me/api/products')
       .then(response => response.json())
       .then(products => {
        setProducts(products)
         
       });
   },[])

   

  return (
    <div >
      <h1  className='text-lg font-bold my-8'>Products {name}</h1>
    
        <div className='grid grid-cols-5 my-8 gap-24 align-center'>
            {
              products.map(product => <Product key={product._id}  product={product}/>)
            }
          
        </div>   
     
    </div>
  )
}

export default Products
