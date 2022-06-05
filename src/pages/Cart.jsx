import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/features/cartSlice';

const Cart = () => {

    let dispatch = useDispatch()
    const product = useSelector((state) => state.cart);
    console.log(product);

    const handleChange = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {product.map((item) => {
                    const { category, price, id, image } = item;
                    return (
                        <div className="cartCard" key={item.id}>
                            <img src={image} alt="" />
                            <h3>{category}</h3>
                            <h3>{price}</h3>
                            <button className="btn" onClick={() => handleChange(id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart