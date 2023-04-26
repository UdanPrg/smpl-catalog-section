import React, { useState, useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { CartContext } from "./cartContext";


export default function Cart() {
    const [cart, useCart] = useContext(CartContext)
    const [active, setActive] = useState(true);
    
    return (

        <div className={`fixed h-screen w-3/4 md:w-2/3 xl:w-1/3 transition-all duration-500 ${active ? '-right-3/4 md:-right-2/3 xl:-right-1/3 ': 'right-0'} top-0 bg-orange-50 border-l border-l-red-900`}>
            <div className="relative w-full h-full">
                <ShoppingBagIcon
                    onClick={() => setActive(!active)}
                    className={`absolute top-1/2 ${active ? '-left-16' : '-left-7'} transition-all duration-500 bg-red-950 stroke-white stroke-2 rounded-full w-14 h-14 p-3 border border-slate-800 cursor-pointer`}
                />

                <div>
                    <h1>Cart</h1>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-800 px-4 py-1 w-5/6 text-left">Product</th>
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
            </div>

        </div>
    );
}