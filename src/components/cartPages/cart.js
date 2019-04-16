import React from 'react'
import Title from '../title'

import CartColumn from './cartcolumn'
import CartList from './cartList'
import CartTotal from './cartTotal'
export default function Cart() {
  return (
    <div>
      <CartColumn/>
      <CartList/>
      <CartTotal/>
    </div>
  )
}
