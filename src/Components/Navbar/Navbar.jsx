import React from 'react'
import './Navbar.css'
import logo from '../Assets/logot.png'
import cart_icon from '../Assets/carritocompras.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src ={logo} height="55px" alt=''/>
        <p>ANDINOS</p>
        

      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Categoría</li>
        <li>Región</li>
        <li>Precios</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} height = "40px" alt=''/>

      </div>
    </div>
  )
}

export default Navbar