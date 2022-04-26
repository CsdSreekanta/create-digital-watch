import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, price}=props.product
   
    return (
        <div className='product'>
           <img src={img} alt="" />
           <h3>{name}</h3>
           <p>Price: ${price}</p>
           <button className='btn-cart'>
                <p className='cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
            
        </div>
        
    );

};

export default Product;