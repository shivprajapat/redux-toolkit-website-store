import React from 'react'

const Navbar = () => {
    return (
        <header>
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: 0</span>
            </div>
        </header>
    )
}

export default Navbar