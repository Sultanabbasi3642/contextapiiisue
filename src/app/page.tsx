
import Image from 'next/image'
import Products from './Products'
import { CartProvider } from './Components/CartContext'


export default function Home() {
  return (
<section>
<CartProvider><Products/></CartProvider>
  
</section>
   
  )
 
}
