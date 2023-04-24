import React, { useContext, useState } from "react"
import Image from "next/image"
import styles from './product.module.css'
import InputTitle from "./textTitle";
import { CartContext } from "./cartContext";

export default function Product({id, title, description, price, image, sizeTitle }){
    const [countProducts, setCountProducts] = useState(0);
    const [textTitle, setTextTitle] = useState(title)

    const [cart, setCart] = useContext(CartContext);
    const funAddToCart = () => {
        if(countProducts === 0){
            return;
        }
        // Crea un objeto con la información del producto
        const product = {
            id: id,
            title: textTitle,
            price: price,
            quantity: countProducts
        };
        
        const productoExistente = cart.find(p => p.id === id);
        
        if (productoExistente) {
            // Actualizar la cantidad del producto existente en el carrito
            const nuevosProductos = cart.map(p => {
                if (p.id === product.id) {
                    return { ...p, quantity: p.quantity + product.quantity };
                } else {
                    return p;
                }
            });
            setCart(nuevosProductos);
        } else {
            // Agregar el nuevo producto al carrito
            setCart([...cart, product]);
        }
    };

    return(
        <div>
            <InputTitle currentTitle={textTitle} funChangeTitle={head => setTextTitle(head.target.value)} />
            <div className={`transition duration-500 ease-in-out hover:shadow-xl ${styles.productContainer}`} key={id}>
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="mx-auto w-2/3 h-80 object-contain border-2 border-slate-100 p-3"
                />
                <h4 style={{ fontSize: `${sizeTitle}px` }} className="line-clamp-1 font-semibold my-4 h-16 flex items-stretch">{textTitle}</h4>
                <div className="container-price grid grid-cols-2 gap-1">
                    <b>USD$ {price}</b>
                    <input
                        value={countProducts}
                        onChange={e => setCountProducts(parseInt(e.target.value))}
                        type="number"
                        className="border-2 border-zinc-500 pl-2 rounded-md w-1/2 xl:w-3/4"
                    />
                </div>
                <p className="text-sm my-4 text-justify line-clamp-3">{description}</p>
                <button
                    onClick={funAddToCart}
                    className="block w-1/2 lg:w-1/3 xl:w-1/2 px-4 py-2 bg-red-950 rounded-md border-2 border-slate-950 text-white mx-auto transition-all duration-300 hover:bg-white hover:text-black"
                >Add To Cart</button>
                <a href="#" className="block text-center my-3 hover:text-red-800 text-sm">Learn More</a>
            </div>

        </div>
    )
}



