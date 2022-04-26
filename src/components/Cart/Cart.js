import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
 let name =[];
 for(const product of cart){
    name = name +product.name
 }


  
    

   
    
    return (
        <div className='cart'>
            {/* <p>this is for cart: {cart.length}</p> */}
            <p>{name}</p>
           
           
            
        </div>
    );
};

export default Cart;