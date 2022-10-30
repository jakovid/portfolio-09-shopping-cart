import React from "react";
import AllProducts from "../data/AllProducts";
import Product from "./Product";

export default function PopulateStore(){
    return(
        AllProducts.map(product => {
            return <Product key={product.id} product={ product } />
        })
    )
}