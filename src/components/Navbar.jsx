import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <header>
            <span className='logo' >Redux Store</span>
            <div>
                <Link to='/' className='navLink'>Home</Link>
                <Link to='/cart' className='navLink'>Cart</Link>
                <span className='navLink carticon'>{items.length}</span>
            </div>
        </header>
    )
}

export default Navbar