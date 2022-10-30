import React from "react";

export default function Product({ product }){
    return(
        <div className='productItem'>
            <img className='productImage' src={product.image} />
            {product.name}
            {product.price}
        </div>
    )
}