import React from "react";

export default function Product({ product }){
    return(
        <div className='productItem'>
            <img className='productImage' src={product.image} />
            <div className='productInfo'>
                <div className='productName'>{product.name}</div>
                <div className='productPrice'>${product.price}</div>
                <div className='addToCartBtn'>Add to cart</div>
            </div>
            
        </div>
    )
}