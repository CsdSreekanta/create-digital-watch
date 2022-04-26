import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
const [products, setProducts] = useState([])
const [cart, setCart]= useState([])
const [newCart, setNewCart] = useState([])

useEffect(() =>{
    fetch('products.json')
    .then(res =>res.json())
    .then(data => setProducts(data))
},[]);

const handleAddToCart =(product) =>{
   const newCart = [...cart, product];
   setCart(newCart)
   if(newCart.length>4){
       alert("sorry")
   }
}
  



    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                   
                   {
                       products.map(product =><Product
                       key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart}
                   
                       ></Product>)
                   }
                </div>
                <div className="cart-container">
                    <h1>this is cart</h1>
                        <Cart
                       cart={cart}
                       ></Cart>
                    <div className="btn-container">
                        <button className='choose'>CHOOSE 1 FOR ME</button>
                        <button className='choose-again'>CHOOSE AGAIN</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;