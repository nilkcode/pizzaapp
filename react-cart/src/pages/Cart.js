import {useContext,useEffect, useState} from 'react'
import {CartContext} from  '../CartContext'
import Products from '../components/Products';
import Swal from "sweetalert2"



const Cart = () => {
   
  let total = 0;

  const [products,setCartProduct] = useState([]);
  const {cart , setCart} = useContext(CartContext);
  
  const [priceFetched, tooglePriceFetched] = useState(false);

  useEffect(() =>{
     if(!cart.items){
         return;
     }  
    // console.log(Object.keys(cart.items));
     if(priceFetched){ 
       return;
     }
     
    fetch('https://star-spark-pasta.glitch.me/api/products/cart-items' ,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({ids:Object.keys(cart.items)})
      }).then(res => res.json())
      .then(products => {
     
        setCartProduct(products);
        tooglePriceFetched(true);
      })

  },[cart]);

  const getQty = (productId) =>{
      return cart.items[productId];
  }

  const increment = (productId) =>{
    
    const existingQty = cart.items[productId];
    const _cart = {...cart};
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);

  }
  const decrement = (productId) => {
    const existingQty = cart.items[productId];
     if(existingQty  === 1){
         return;  
     }

    const _cart = {...cart};
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }

  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  }

  const handleDelete = (productId) => {
    const _cart = {...cart};
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    
    const updateProductList = products.filter((product) => product._id !== productId); 
    setCartProduct(updateProductList)
  }

  const handleOrderNow = () => {
        Swal.fire({
          icon: 'success',
          title: 'Yey...',
          text: 'Order Place Successfully !'
      })
      setCartProduct([]);
      setCart({});
  }

   

  return (
    products.length ? 
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
          
        <h1 className="my-8 font-bold">Cart Items</h1>
        <ul>
        
            
                {
                  products.map(product => {

                    return (
                      <li className="mb-12" key={product._id}>
                      <div className="list-wrapper flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="h-16" src={product.image} alt="image.png"></img>
                            <span className="font-bold ml-4 w-48">{product.name}</span>
                        </div>
                        <div>
                            <button  onClick={() => {decrement(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                            <b className="px-4">{getQty(product._id)}</b>
                            <button onClick={() => {increment(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
          
                        </div>
                        <div className="">₹ {getSum(product._id, product.price)}</div>
                        <button onClick={() => {handleDelete(product._id)}} className="bg-red-500 px-4 py-3 rounded-full leading-none rounded-full text-white">Delete</button>
                      </div>
                    </li>
                    )
                   
                  })
                }
                
              
          
        </ul>
        <hr></hr>
        <div className='my-5 text-right'>
          Grand Total: ₹ {total}
        </div>
        <div className="text-right">
           <button className="bg-yellow-500 px-4 py-3 rounded-full leading-none rounded-full text-white" onClick={handleOrderNow}>Order Now</button>
        </div>
    </div>
    :<img src="images/empty-cart.png" className="mx-auto w-1/2  mt-12" alt="empty-cart"/>
  )
}

export default Cart;
