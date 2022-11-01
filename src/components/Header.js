import React from "react";
import ShoppingCart from "./ShoppingCart";

export default function Header({cartItems, cartVisible}){
    return(
        <div id='header'>
            <div>
                <a id='headerLeft' href='/'>FalseRetail</a>
            </div>
            
            <div id='headerRight'>
                <div><a href='/'>Home</a></div>
                <div><a href="/shop">Products</a></div>
                <div>Contact</div>
                <div id="cartContainer">
                    <ShoppingCart cartItems={cartItems} cartVisible={cartVisible} />
                </div>
            </div>
        </div>
    )
}