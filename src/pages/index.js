import React, { createContext, useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { getDataAPI } from './api/hello'

// Components
import Product from '@/components/product_card'
import SectionProducts from '@/components/section_products';
import Range from '@/components/rangeSize';
import Cart from '@/components/cart';
import Sidebar from '@/components/sidebar';
import { CartContext } from '@/components/cartContext';
// export const CartContext = createContext();

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(){
  const products = await getDataAPI();
  return {
    props:{
      products,
    },
  }
}

export default function Home({ products }) {
  const [textSize, setTextSize] = useState(20)
  const [cart, setCart] = useState([])

  // console.log('res... ' + products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-16 xl:p-24">
      <h1 className="text-center text-4xl font-bold mb-10"> Shopping Section</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5 w-full'>
        <Range currentSize={textSize} funChangeSize={reSize => setTextSize(reSize.target.value)} label={"Product Title size is"}/>
        <CartContext.Provider value={[cart, setCart]}>
          <Cart />
        </CartContext.Provider>
      </section>
      <CartContext.Provider value={[cart, setCart]}>
        <SectionProducts 
          child={ 
            products.map((product) =>(
              <Product id={product.id} title={product.title} description={product.description} price={product.price} image={product.image} sizeTitle={textSize} key={product.id}/>
              ))
            }
        />
        </CartContext.Provider>
    </main>
  )
}