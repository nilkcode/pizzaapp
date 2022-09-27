import React from 'react'
import Products from '../components/Products';




const Home = () => {
    

  return (
     <>
      <div className=" hero p-4">
          <div style={{alignItems:'center'}} className="container item-center mx-auto flex justify-between p-10">
           
             <div className='w-1/2'>
               <i>Are you happy</i>
               <h2 style={{fontSize:'51px',FontWeight:'700'}}>Don't Wait !</h2>
               <button className='py-2 px-6 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order Now</button>
              </div>
              <div className='w-1/2'>
                  <img src='./images/pizza.png'  alt='png' className='4/5'></img>
              </div>
            
              
          </div>

         
      </div>

      <div className='pb-24 container mx-auto'>
             <Products/>
      </div>
     
     </>
  )
}

export default Home;


