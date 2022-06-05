import React from 'react'
import Product from "../components/Product";

const Home = () => {
    return (
        <section>
            <h2 className="heading">Welcome to the Redux Toolkit Store</h2>
            <div>
                <h3>Product</h3>
            </div>
            <Product />
        </section>
    )
}

export default Home