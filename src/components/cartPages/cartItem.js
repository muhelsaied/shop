import React from 'react'
import { FaTrash, FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

export default function CartItem({ product, incrementCart, decrementCart, removeCartItem}) {
  const { id , title, image, price, counter, total } = product;
  return (
    <div className='row m-0 mt-5 mt-lg-0 text-capitalize text-center align-items-center'>
      {/*  image */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} alt={title} width='50px' className='img-fluid'/>
      </div> 
      {/* end of image */}

      
       {/*  product name */}
       <div className='col-10 mx-auto col-lg-2 pb-2'>
        <h6 className='text-title'><span className='d-lg-none text-main'>product : </span>{title}</h6>
      </div> 
      {/* end of product name */}


      {/*  product price */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <h6 className='text-title'><span className='d-lg-none text-main'>price : </span>{price} $</h6>
      </div> 
      {/* end of product price */}


      {/*  product counter */}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <FaChevronCircleUp className='text-warning cart-icon' onClick={()=> incrementCart(id)}/>
            <span className='text-title text-muted mx-3'>{counter} </span>
            <FaChevronCircleDown className='text-warning cart-icon' onClick={()=> decrementCart(id)}/>
          </div>
        </div>
      </div> 
      {/* end of product counter */}


      {/*  product delete */}
      <div className='col-10 mx-auto col-lg-2 my-3'>
        <FaTrash className='text-danger cart-icon'
        onClick={() => removeCartItem(id)}/>
      </div> 
      {/* end of product delete */}


      {/*  product total */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <h6 className='text-title'><span className='d-lg-none text-main'>total : </span>{total} $</h6>
      </div> 
      {/* end of product total */}
      
    
    </div>
  )
}
