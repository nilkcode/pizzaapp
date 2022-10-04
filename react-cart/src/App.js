import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Naviagtion from './components/Naviagtion';
import Product from './components/Product';
import Products from './components/Products';
import About from './pages/About';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';

const App = () =>{
    return (
         <>
            <Router>
                 <CartContext.Provider value={{name:"nilesh coding"}}>
                 <Naviagtion/>

                <Routes>
                    <Route  path='/' element={<Home/>} exact></Route>
                    <Route  path="/about" element={<About/>} exact></Route>
                    <Route  path="/products" element={<ProductsPage/>} exact></Route>
                    <Route  path="/products/:_id" element={<SingleProduct/>} ></Route>

                   {/*  <Route exact path='/' Component={}></Route> */}

                </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}


export  default App;