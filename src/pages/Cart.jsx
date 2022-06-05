import React from 'react'
import logo from '../logo.svg'
const Cart = () => {
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                <div className="cartCard">
                    <img src={logo} alt="" />
                    <h3>title</h3>
                    <h3>price</h3>
                    <button className="btn">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Cart