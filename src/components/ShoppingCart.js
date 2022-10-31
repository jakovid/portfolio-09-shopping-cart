import React, {useState} from "react";

export default function ShoppingCart({ cartItems }){
    return(
        <>
            <img src={require('../images/ShoppingCart.png')} alt='shopping cart' />
            <div>{cartItems.length}</div>
        </>
    )
}