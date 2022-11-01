import React from "react";


export default function PopulateCheckOut( { cartItems }){
    return(
        cartItems.map(item => {
            return <div>{item.name}</div>
        })
    )
}