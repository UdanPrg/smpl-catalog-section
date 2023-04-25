import React, { useState } from "react";
import { CartContext } from "./cartContext";

export default function Sidebar(){
    return(
        <div className="fixed"></div>
        // <CartContext.Provider value={[cart, setCart]}>
        //   <Cart />
        // </CartContext.Provider>
    )
}