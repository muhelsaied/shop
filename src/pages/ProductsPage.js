import React from 'react'
import ProductSub from '../components/productPages/ProductSub'
import Bcg from '../images/productsBcg.jpeg'
import Main from '../components/main'


export default function Products() {
  return (
    <div>
      <Main img ={Bcg}/>
      <ProductSub/>
    </div>
  )
}
