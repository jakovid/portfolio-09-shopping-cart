import React from "react";

export default function CheckOutItem({ item, removeItem }){

    function handleRemoveItem(){
        removeItem(item.id);
    }

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
            <div className="removeItemBtn" onClick={handleRemoveItem} >Remove Item</div>
        </>
    )
}