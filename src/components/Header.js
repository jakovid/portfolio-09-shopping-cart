import React from "react";

export default function Header(){
    return(
        <div id='header'>
            <div id='headerLeft'>
                FalseRetail
            </div>
            <div id='headerRight'>
                <div><a href='/'>Home</a></div>
                <div><a href="/shop">Products</a></div>
                <div>Contact</div>
                <img src={require('../images/ShoppingCart.png')} alt='shopping cart' />
            </div>
        </div>
    )
}