import React from "react";

export default function CheckOutItem({ item }){
    return(
        <>
            <div>
                <img className='productImage'  src={item.image} />
            </div>
            <div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.quantity}</div>
            </div>
        </>
    )
}