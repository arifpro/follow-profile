import React, { useState } from 'react';
import fakeData from '../../fakeData/';
// import users from '../../Data/photos'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(" new ", fakeData);
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("product added", product);
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product => <Product
                        handleAddProduct={handleAddProduct} 
                        product={product}></Product>)
                }

            </div>
            <div className="cart-container">
                {/* <h3>This is cart</h3>
                <h5>Order Summary: {cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;