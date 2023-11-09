import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../components/Assets/logo.png'
import cart_icon from '../components/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
  const Navbar = () => {
    const {getTotalcartItems}=useContext(ShopContext)
   const [menu,setMenu]=useState("shop")


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
           <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none', color:'#626262'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'#626262'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'#626262'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:'#626262'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>

        </ul>
        <div className='nav-login-cart'>
           <Link style={{textDecoration:'none'}} to='/login'> <button>Login</button></Link>
           <Link style={{textDecoration:'none'}}  to='/cart'><img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{getTotalcartItems()}</div>
        </div>
        </div>
  )
}
export default Navbar
