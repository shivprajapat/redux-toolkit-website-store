import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState("")

    const fetchProduct = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProduct(data)
        console.log(data);
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <section className='productsWrapper'>
            {product && product.map((product, index) => {
                const { category, price, image, description } = product;

                return <div className="card" key={index}>
                    <img src={image} alt="" />
                    <h3>{category}</h3>
                    <h3>{price}</h3>
                    <p>{description.slice(0, 50)}</p>
                    <button className="btn">Add</button>
                </div>
            })}
        </section>
    )
}

export default Product