import React from "react";
import ShoppingCartBtn from "./ShoppingCartBtn";

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
                    <ShoppingCartBtn cartItems={cartItems} cartVisible={cartVisible} />
                </div>
            </div>
        </div>
    )
}