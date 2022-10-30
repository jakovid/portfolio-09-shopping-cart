import React from "react";

export default function Product({ product }){
    return(
        <div className='productItem'>
            <img src={product.img} alt={product.id} />
            {product.name}
            {product.price}
        </div>
    )
}