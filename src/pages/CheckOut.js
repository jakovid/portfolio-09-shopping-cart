import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../components/Header";
import PopulateCheckOut from "../components/PopulateCheckOut";


export default function CheckOut() {
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

    function removeItem(id){
        let newCartItems = [...cartItems];
        newCartItems = newCartItems.filter(targetItem => targetItem.id != id);
        setCartItems(newCartItems);
    }

    function decreaseQuantity(id){
        let newCartItems = [...cartItems];
        let targetItem = cartItems.find(item => item.id == id);
        targetItem.quantity -= 1;
        (targetItem.quantity < 1 ? removeItem(id) : setCartItems(newCartItems));
    }

    function increaseQuantity(id){
        let newCartItems = [...cartItems];
        let targetItem = cartItems.find(item => item.id == id);
        targetItem.quantity += 1;
        setCartItems(newCartItems);
    }

    return(
        <div>
            <Header cartItems={cartItems} cartVisible={cartVisible} />
            <div id='checkOutContainer'>
                <PopulateCheckOut cartItems={cartItems} removeItem={removeItem} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
            </div>
        </div>
    )
}