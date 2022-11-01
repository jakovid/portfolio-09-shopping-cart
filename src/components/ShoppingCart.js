import React from "react";
import PopulateCart from "./PopulateCart";

export default function ShoppingCart({ cartItems, cartVisible }){

    function handleCartVisible() {
        cartVisible = !cartVisible;
        console.log(cartVisible)
    }

    return(
        <>
            <img src={require('../images/ShoppingCart.png')} alt='shopping cart' onClick={handleCartVisible} />
            <div>{cartItems.length}</div>
        </>
    )
}