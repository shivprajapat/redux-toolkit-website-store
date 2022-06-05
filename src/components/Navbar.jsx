import React from 'react'

const Navbar = () => {
    return (
        <header>
            <span className='logo' >Redux Store</span>
            <div>
                <a className='navLink' href="/">Home</a>
                <a className='navLink' href="/">Cart</a>
                <span className='navLink' >0</span>
            </div>
        </header>
    )
}

export default Navbar