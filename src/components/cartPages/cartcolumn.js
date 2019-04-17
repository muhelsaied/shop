import React from 'react'
import SingleColumn from './singlecolumn'

export default function CartColumn() {
  return (
    <div>
      <div className='container-fluid text-center d-none d-lg-block my-5 mx-auto'>
        <div className='row'>
          <SingleColumn text='products'/>
          <SingleColumn text='product name'/>
          <SingleColumn text='price'/>
          <SingleColumn text='quantity'/>
          <SingleColumn text='remove product'/>
          <SingleColumn text='total'/>
        </div>
      </div>
    </div>
  )
}
