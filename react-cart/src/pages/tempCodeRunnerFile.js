import {useContext,useEffect, useState} from 'react'
import {CartContext} from  '../CartContext'
import Products from '../components/Products';



const Cart = () => {

  const [cartProduct,setCartProduct] = useState([]);
  const {cart} = useContext(CartContext);


  useEffect(() =>{
     if(!cart.items){
         return;
     }  
    // console.log(Object.keys(cart.items));
     
     
    fetch('https://star-spark-pasta.glitch.me/api/products/cart-item' ,{
        method: 'POST',
        header:{
          'contentType': 'application/json'
        },
        body:JSON.stringify({ids:Object.keys(cart.items)})
      }).then(res => res.json())
      .then(products => {
        console.log(products);
        setCartProduct(products);
      })

  },[cart]);

   

  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
          
        <h1 className="my-8 font-bold">Cart Items</h1>
        <ul>
           <li className="mb-12">
            <div className="list-wrapper flex justify-between items-center">
               <div className="flex items-center">
                  <img className="h-16" src="/images/peproni.png" alt="image.png"></img>
                   <span className="font-bold ml-4 w-48">Double Peproni</span>
               </div>
               <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                  <b className="px-4">22</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>

               </div>
               <div className="">₹ 500</div>
               <button className="bg-red-500 px-4 py-3 rounded-full leading-none rounded-full text-white">Delete</button>
            </div>
           </li>
           <li className="mb-12">
            <div className="list-wrapper flex justify-between items-center">
               <div className="flex items-center">
                  <img className="h-16" src="/images/peproni.png" alt="image.png"></img>
                   <span className="font-bold ml-4 w-48">Double Peproni</span>
               </div>
               <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                  <b className="px-4">22</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>

               </div>
               <div className="">₹ 500</div>
               <button className="bg-red-500 px-4 py-3 rounded-full leading-none rounded-full text-white">Delete</button>
            </div>
           </li>
        </ul>
        <hr></hr>
        <div className='my-5 text-right'>
          Grand Total: ₹ 500
        </div>
        <div className="text-right">
           <button className="bg-yellow-500 px-4 py-3 rounded-full leading-none rounded-full text-white">Order Now</button>
        </div>
    </div>
  )
}

export default Cart;
