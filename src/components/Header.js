import React from "react";

export default function Header(){
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
                    <img src={require('../images/ShoppingCart.png')} alt='shopping cart' />
                    <div>0</div>
                </div>
            </div>
        </div>
    )
}