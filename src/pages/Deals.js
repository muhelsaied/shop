import React from 'react'
import Bcg from '../images/productsBcg.jpeg'
import Main from '../components/main'
import Deals from '../components/productPages/deals'


export default function DealsPage() {
  return (
      <div>
        <Main img ={Bcg}/>
        <Deals/>
      </div>
  )
}

