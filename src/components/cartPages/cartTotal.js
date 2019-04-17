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
                  <button className='btn btn-outline-danger text-uppercase col-10 col-sm-4 col-lg-3 mx-auto p-2 m-3 sm-width-70'
                    onClick={()=>clearCart()}>
                    empty cart
                  </button>
                  <Link className='btn btn-outline-warning text-uppercase col-10 col-sm-4 col-lg-3 mx-auto p-2 m-3 sm-width-70'
                  to ='/products'
                    onClick={()=>clearCart()}>
                    keep shopping
                  </Link>
                </div>

            )

        }
      }
    </ProductConsumer>
  )
}
