import React from "react";
import CheckOutItem from "./CheckOutItem";


export default function PopulateCheckOut( { cartItems, removeItem, increaseQuantity, decreaseQuantity }){
    return(
        cartItems.map(item => {
            return <CheckOutItem item={item} removeItem={removeItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
        })
    )
}