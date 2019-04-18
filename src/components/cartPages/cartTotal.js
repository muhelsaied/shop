import React from 'react'
import { ProductConsumer } from '../../context'
import { Link } from 'react-router-dom'
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
              <div className='row m-0 mt-5'>
                <TotalSub text={`sub total : $ ${cartSubTotal}`}/>
                <TotalSub text={`tax : $ ${cartTax}`}/>
                <TotalSub  text={`total : $ ${cartTotal}`}/>
                <div className='col-10 max-auto my-2 text-title pb-2 d-block mx-auto text-center'>
                  <button className='btn btn-outline-danger text-uppercase  p-2 m-3 '
                    onClick={()=>clearCart()}>
                    empty cart
                  </button>
                  <Link className='btn btn-outline-warning text-uppercase p-2 m-3 '
                  to ='/products'
                    onClick={()=>clearCart()}>
                    keep shopping
                  </Link>
                  </div>
                </div>

            )

        }
      }
    </ProductConsumer>
  )
}
