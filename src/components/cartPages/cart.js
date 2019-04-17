import React from 'react'
import Title from '../title'

import CartColumn from './cartcolumn'
import CartList from './cartList'
import CartTotal from './cartTotal'
export default function Cart() {
  return (
      <section className='py-5'>
      {/* cart title  */}
        <div className='container mt-3'>
          <Title title='your shopping item ' center/>
        </div>
        {/* cart contaent */}
        <CartColumn/>
        <CartList/>
        <CartTotal/>
    </section>
  )
}
