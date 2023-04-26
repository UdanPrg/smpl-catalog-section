import React, { useState, useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { CartContext } from "./cartContext";
import Image from "next/image";


export default function Cart() {
    const [cart, useCart] = useContext(CartContext)
    const [active, setActive] = useState(true);

    return (

        <div className={`fixed h-screen w-3/4 md:w-2/3 xl:w-1/3 transition-all duration-500 ${active ? '-right-3/4 md:-right-2/3 xl:-right-1/3 ': 'right-0'} top-0 bg-orange-50 border-l border-l-red-900`}>
            <div className="relative w-full h-full ">
                <ShoppingBagIcon
                    onClick={() => setActive(!active)}
                    className={`absolute top-1/2 ${active ? '-left-16 bg-red-950' : '-left-10 bg-red-900'} stroke-2 stroke-white transition-all duration-500  rounded-full w-14 h-14 p-3 border border-slate-800 cursor-pointer`}
                />
                <div className="m-3">
                    <h1 className="text-2xl text-center my-8 font-semibold">Cart</h1>
                    <div className="overflow-y-auto">
                        <table className="table-auto w-full border-separate">
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td className="w-0 sm:w-auto">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={150}
                                            height={150}
                                            className="hidden sm:block mx-auto w-24 sm:w-24 md:w-60 xl:w-80 h-16 sm:h-24 md:h-16 xl:h-20 object-contain border-2 border-stone-200 p-1"
                                        />
                                        </td>
                                        <td className="pr-3 sm:px-3 text-justify flex flex-col justify-evenly sm:h-24">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={150}
                                                height={150}
                                                className="sm:hidden w-24 sm:w-24 h-16 sm:h-24 object-contain border-2 border-stone-200 p-1 mb-2"
                                            />
                                            <span className="text-xs sm:text-base font-medium line-clamp-2 sm:line-clamp-1">{item.title}</span>
                                            <span className="text-xs text-red-900 mb-5">{item.quantity} * USD${item.price}</span>
                                        </td>
                                        <td className="">
                                            <span className="text-xs sm:text-base font-bold border-l border-l-gray-800 pl-2"> USD${item.price * item.quantity}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}