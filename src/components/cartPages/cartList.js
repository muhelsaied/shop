import React from 'react'
import CartItem from './cartItem'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../context/context';
       
export default function CartList() {
  return (
    <div className='container-fluid'>
        <ProductConsumer>
          {
          value =>{
            const { incrementCart, decrementCart, removeCartItem, cart} = value;
            if (cart.length === 0 ){
              return(
                  <div className='col-8 text-muted text-capitalize text-center mx-auto p-3'>
                    <h1 className='text-title py-3 m-3'> cart is epmty</h1>
                    <Link 
                      to='/products'
                      className='btn btn-outline-warning col-md-3 col-sm-5 mx-auto'>
                      keep shopping
                      </Link>
                  </div>
              )
            }
            return(
              <>
                 {
                   cart.map(item => {
                    return(
                      <CartItem 
                        key={item.id} 
                        product={item} 
                        incrementCart={incrementCart}
                        decrementCart={decrementCart}
                        removeCartItem={removeCartItem}/>
                    )
                    })
                }
              </>
            )
          }
        }
      </ProductConsumer>
      </div>
  )
}
