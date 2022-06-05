import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <span className='logo' >Redux Store</span>
            <div>
                <Link to='/' className='navLink'>Home</Link>
                <Link to='/cart' className='navLink'>Cart</Link>
                <span className='navLink' >0</span>
            </div>
        </header>
    )
}

export default Navbar