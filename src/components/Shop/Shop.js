import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
const [products, setProducts] = useState([])
let [cart, setCart]= useState([]);

 // console.log(cart)


useEffect(() =>{
    fetch('products.json')
    .then(res =>res.json())
    .then(data => setProducts(data))
},[]);

const handleAddToCart =(product) =>{
    
   const newCart = [...cart, product];
   if(newCart.length>4){
    alert("You are not allowed to select more than four items") 
    return;
} 
   setCart(newCart) 
  
}
const random =() =>{
    if(cart.length>0){
        const random = Math.floor(Math.random()*cart.length);
        setCart([cart[random]])
    }
}

const removeAll = () =>{
    cart =[];
    setCart(cart)
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
                    <h2>Order Summary</h2>
                  
           <Cart
            cart={cart}
            key={cart.id}
            ></Cart>  
                 
                    <div className="btn-container">
                        <button onClick={random}  className='choose'>CHOOSE 1 FOR ME</button>
                        <button onClick={removeAll} className='choose-again'>CHOOSE AGAIN</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;