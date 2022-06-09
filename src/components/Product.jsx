import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/features/cartSlice'
import { fetchProducts, STATUSES } from '../store/features/productSlice'

const Product = () => {
    let dispatch = useDispatch()
    const { data: product, status } = useSelector((state) => state.product)
    console.log(product);
    useEffect(() => {
        dispatch(fetchProducts())
    },
        // eslint-disable-next-line
        [])
    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading...</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2>error...</h2>
    }
    return (
        <section className='productsWrapper'>
            {product && product.map((product, index) => {
                const { category, price, image } = product;
                return <div className="card" key={index}>
                    <img src={image} alt="" />
                    <h3>{category}</h3>
                    <h3>{price}</h3>
                    <button className="btn" onClick={() => handleAdd(product)}> Add to cart</button>
                </div>
            })}
        </section>
    )
}

export default Product