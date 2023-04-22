import React from "react"
import Image from "next/image"
import styles from './product.module.css'

export default function Product({id, title, description, price, image, cant }){
    return(
        <div className={`transition duration-500 ease-in-out hover:shadow-xl ${styles.productContainer}`} key={id}>
            <Image
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
                className="mx-auto w-1/2"
            />
            <h4 className="text-xl font-semibold my-4">{title}</h4>
            <div className="container-price">
                <b>{price}</b>
                <input
                    value={cant}
                    // onChange={e => setAge(e.target.value)}
                    type="number"
                />
            </div>
            <p className="text-sm my-4">{description}</p>
            <small>button</small>
            <small>Link</small>
        </div>
    )
}