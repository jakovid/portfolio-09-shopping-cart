import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../components/Header";
import PopulateStore from "../components/PopulateStore";

export default function ShopPage() {
    const [cartItems, setCartItems] = useState([{id: uuidv4(), name: 'Test Hat', price: 10.10, quantity: 2},{id: uuidv4(), name: 'Baby Hat', price: 9.99, quantity: 1}]);
    const LOCAL_STORAGE_KEY = 'shoppingCart.cartItems';
    let cartVisible = false;

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedCartItems) setCartItems(storedCartItems);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart (product) {
        const newCartItems = [...cartItems];
        const newCartItem = {id:uuidv4, name: product.name, price: product.price, image: product.image, quantity: 1};
        newCartItems.push(newCartItem);
        setCartItems(newCartItems);
    }
    
    return(
        <div>
            <Header cartItems={cartItems} />
            <div id='store'>
                <PopulateStore addToCart={addToCart} />
            </div>
        </div>
    )
}