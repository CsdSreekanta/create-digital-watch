import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
 
    return (
        <div className='cart'>
            
           { 
           cart.map(item =><p className='item-title'>{item.name}</p>)
           }
           
        </div>
    );
};

export default Cart;