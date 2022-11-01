import React from "react";
import CheckOutItem from "./CheckOutItem";


export default function PopulateCheckOut( { cartItems }){
    return(
        cartItems.map(item => {
            return <CheckOutItem item={item} />
        })
    )
}