import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
//   console.log(props.id)
    // const {name} =props.cart
    
   for(const product of cart){
       console.log(product)
   }
    
    return (
        <div className='cart'>
            {/* <p>this is for cart: {cart.length}</p> */}
            
           
            <div className="btn-container">
                        <button className='choose'>CHOOSE 1 FOR ME</button>
                        <button className='choose-again'>CHOOSE AGAIN</button>
             </div>
            
        </div>
    );
};

export default Cart;