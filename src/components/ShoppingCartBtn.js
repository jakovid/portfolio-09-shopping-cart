import React from "react";

export default function ShoppingCartBtn({ cartItems }){


    return(
        <a href="/checkout">
            <img src={require('../images/ShoppingCart.png')} alt='shopping cart' />
            <div>{cartItems.length}</div>
        </a>
    )
}