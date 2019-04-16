import React from 'react'
import Main from '../components/main'
import Cart from '../components/cartPages'

import Bcg from '../images/storeBcg.jpeg'

export default function CartPage() {
  return (
    <div>
      <Main img={Bcg} title='cart page'/>
      <Cart/>
    </div>
  )
}
