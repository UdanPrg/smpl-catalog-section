import Image from 'next/image';
import { Inter } from 'next/font/google'
import { getDataAPI } from './api/hello'

import Product from '@/components/product_card'
import SectionProducts from '@/components/section_products';

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
  // console.log('res... ' + products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SectionProducts 
          child={
            products.map((product) =>(
              <Product id={product.id} title={product.title} description={product.description} price={product.price} image={product.image} key={product.id}/>
              ))
            }
        />
    </main>
  )
}