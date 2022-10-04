import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams,useNavigate } from 'react-router-dom';

const SingleProduct = () => {

  const[product ,setProduct] = useState({});
  
  const param = useParams();
  const navigate = useNavigate();
  console.log(param);


  const backHomePage = () => {
   
    navigate(-1)
  }



  useEffect( () => {
     
       fetch(`https://star-spark-pasta.glitch.me/api/products/${param._id}`)
       .then(res => res.json())
       .then(product => {
          setProduct(product)
       })


  },[param._id])

  


  return (
    <>
      <div className="container mx-auto mt-12" style={{width:"83%"}}>
          <button className="mb-12 font-bold" onClick={backHomePage}>Back</button>
          <div className="flex">
            <div> <img src={product.image} alt='pizza' /></div>         
             <div className='ml-16'>
                 <h1 className="text-xl font-bold">{product.name}</h1>
                 <div className='text-md my-3 font-bold'>{product.size}</div>
                 <div className='font-bold my-3'>${product.price}</div>
                 <button className='py-1 px-4 rounded-full text-black font-bold  bg-yellow-500 hover:bg-yellow-600'>Add to Cart</button>

              </div>
          </div>
      </div>
    </>
  )
}

export default SingleProduct;