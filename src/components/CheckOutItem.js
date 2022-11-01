import React from "react";

export default function CheckOutItem({ item, removeItem, increaseQuantity, decreaseQuantity }){

    function handleRemoveItem(){
        removeItem(item.id);
    }

    function handleItemDecrease(){
        decreaseQuantity(item.id)
    }

    function handleItemIncrease(){
        increaseQuantity(item.id)
    }

    let totalPrice = Math.round(item.price * item.quantity * 100) / 100;

    return(
        <div className="checkOutItem">
            <div>
                <img className='productImage'  src={item.image} />
            </div>
            <div>
                <div>{item.name}</div>
                <div>{totalPrice}</div>
                <div className="quantityBox">
                    <div className="quantityBtn" onClick={handleItemDecrease} >-</div>
                    {item.quantity}
                    <div className="quantityBtn" onClick={handleItemIncrease}>+</div>
                </div>
            </div>
            <div className="removeItemBtn" onClick={handleRemoveItem} >Remove Item</div>
        </div>
    )
}