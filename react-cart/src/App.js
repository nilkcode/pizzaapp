import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Naviagtion from './components/Naviagtion';
import About from './pages/About';
import Home from './pages/Home';



const App = () =>{
    return (
         <>
            <Router>
                 
                 <Naviagtion/>

                <Routes>
                    <Route  path='/' element={<Home/>} exact></Route>
                    <Route  path='/about' element={<About/>} exact></Route>
                   {/*  <Route exact path='/' Component={}></Route> */}

                </Routes>
            </Router>
        </>
    )
}


export  default App;