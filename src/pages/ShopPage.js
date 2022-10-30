import React from "react";
import Header from "../components/Header";
import PopulateStore from "../components/PopulateStore";

export default function ShopPage() {
    return(
        <div>
            <Header />
            <div id='store'>
                <PopulateStore />
            </div>
        </div>
    )
}