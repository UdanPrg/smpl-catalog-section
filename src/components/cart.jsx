import React, { useState, useContext } from "react";
import { CartContext } from "./cartContext";
export default function Cart() {
    // // Crea un estado para almacenar los productos en el carrito
    // const [cartItems, setCartItems] = useState([]);
    const [cart, useCart] = useContext(CartContext)
    // // Función para agregar al carrito
    // function addToCart(product){
    //     setCartItems([...cartItems, product]);
    // };

    return (
        <div>
            <h1>Cart</h1>
            {/* Renderiza la tabla con la información del carrito */}
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="border border-slate-800 px-4 py-1">Product</th>
                        <th className="border border-slate-800 px-4 py-1">Quantity</th>
                        <th className="border border-slate-800 px-4 py-1">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className="text-center">{item.quantity}</td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}