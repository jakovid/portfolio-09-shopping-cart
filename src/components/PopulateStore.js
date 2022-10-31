import React from "react";
import AllProducts from "../data/AllProducts";
import Product from "./Product";

export default function PopulateStore( { addToCart }){
    return(
        AllProducts.map(product => {
            return <Product key={product.id} product={ product } addToCart={addToCart} />
        })
    )
}