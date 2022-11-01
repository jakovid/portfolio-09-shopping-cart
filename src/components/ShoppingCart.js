import React from "react";

export default function ShoppingCart({ cartItems, cartVisible }){

    function handleCartVisible() {
        cartVisible = !cartVisible;
        console.log(cartVisible)
    }

    return(
        <a href="/checkout">
            <img src={require('../images/ShoppingCart.png')} alt='shopping cart' onClick={handleCartVisible} />
            <div>{cartItems.length}</div>
        </a>
    )
}