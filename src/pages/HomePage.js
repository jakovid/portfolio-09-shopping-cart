import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../components/Header";
import HomePageMain from "../components/HomePageMain";
import PopulateCart from "../components/PopulateCart";


export default function HomePage() {
    const [cartItems, setCartItems] = useState([{id: uuidv4(), name: 'Test Hat', price: 10.10, quantity: 2},{id: uuidv4(), name: 'Baby Hat', price: 9.99, quantity: 1}]);
    const LOCAL_STORAGE_KEY = 'shoppingCart.cartItems';
    const cartVisible = false;

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedCartItems) setCartItems(storedCartItems);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return(
        <div>
            <Header cartItems={cartItems} cartVisible={cartVisible} />
            <HomePageMain />
        </div>
    )
}