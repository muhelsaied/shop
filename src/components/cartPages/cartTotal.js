import React from 'react'
import { ProductConsumer } from '../../context'
import TotalSub from './totalSub'
export default function CartTotal() {
  return (
    <ProductConsumer>
      {
        value => {
          const { cartSubTotal, cartTax, cartTotal, clearCart, cart } = value;
          if (cart.length === 0 ){
            return <></>
          }
          return( 
            <div className='row m-0'>
              <TotalSub text={`sub total : $ ${cartSubTotal}`}/>
              <TotalSub text={`tax : $ ${cartTax}`}/>
              <TotalSub  text={`total : $ ${cartTotal}`}/>
                <button className='btn btn-outline-danger text-uppercase col-md-4 col-sm-4 mx-auto p-2 m-3'
                  onClick={()=>clearCart()}>
                  empty cart
                </button>
              </div>

            )

        }
      }
    </ProductConsumer>
  )
}
