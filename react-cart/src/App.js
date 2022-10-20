import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Naviagtion from './components/Naviagtion';
import Product from './components/Product';
import Products from './components/Products';
import About from './pages/About';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useState ,useEffect} from 'react';
import Cart from './pages/Cart';
import { getCart,storeCart } from './pages/helpers';

const App = () =>{

   const[cart ,setCart] = useState({});

   //fetch from local strorage

   useEffect(() => {
    getCart().then(cart => {
        setCart(JSON.parse(cart));
    
    });
     
   },[])

    useEffect(() => {
         storeCart(JSON.stringify(cart));
    },[cart])
        


    return (
         <>
            <Router>
                 <CartContext.Provider value={{cart,setCart}}>
                 <Naviagtion/>

                <Routes>
                    <Route  path='/' element={<Home/>} exact></Route>
                    <Route  path="/about" element={<About/>} exact></Route>
                    <Route  path="/products" element={<ProductsPage/>} exact></Route>
                    <Route  path="/products/:_id" element={<SingleProduct/>} ></Route>

                  <Route exact path='/cart'  element={<Cart/>}></Route> 

                </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}


export  default App;