import { Link } from "react-router-dom";

const Naviagtion = () => {

    const cartStyle = {
        backgroundColor:'#F59A0D',
        display: 'flex',
        justifyContent: 'between',
        alignItems:'center',
        padding: '1px 7px',
        borderRadius: '25px',
        marginLeft: '6px'
    }
    
    return(
        <>
         <nav className="container item-center mx-auto flex justify-between p-10">
            <Link to='/'>
               <img src="/images/logo.png"  style={{width:100}} alt='logo'/>
            </Link>
            <ul className="flex">
                <li>
                    <Link to='/'>Home </Link>
                </li>
                <li className="mx-5">
                    <Link to='/product'>Product</Link>
                </li>
                <li className="flex item-center">
                    <Link to="/cart">
                        <div style={cartStyle}>
                            <span style={{fontSize:13,marginRight:'3px'}}>10</span>
                            <img src="/images/cart.png"/>
                        </div>
                    </Link>
                </li>
            </ul>
         </nav>
        </>
    )
    

}

export default Naviagtion;