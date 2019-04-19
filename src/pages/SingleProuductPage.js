import React from 'react'
import { ProductConsumer } from '../context'
import  { Link } from 'react-router-dom'
import Main from '../components/main'



import svg from '../images/circles.svg'

export default function SingleProudct() {
  return (
    <section>
      <Main/>
      <ProductConsumer>
        {
          value => {
            const { singleProduct, addToCart, loading} = value ;
            if (loading) {
              console.log('loading')
              return (
              <div className='container my5 bg-primary' style={{height:'300px',width:'300px'}}>
                <img src= {svg} alt='laoodinImmage'/>
              </div>
              )
            }
            const { id, title, company, description,price, image} = singleProduct;
            return (
              <div className='container my-5'>
                <div  className ='card rounded'>
                  <div className ='row my-5 p-3'>
                    <div className='col-10 mx-auto col-sm-10 col-md-8 col-lg-6'>
                      <div className='img-container'>
                        <img
                          src={image} 
                          // src = {`../${image}`}
                          alt='title'
                          className='img-fluid'/>
                      </div>
                    </div>
                    <div className='col-12 mx-auto col-sm-12 col-md-8 col-lg-6'>
                      <h1 className='text-title mb-4'>{title}</h1>
                      <h5 className='text-muted text-capitalize py-4'><span className='bg-warning rounded p-1'
                        style={{fontSize:'17px',fontFamily:'var(--specialFont)'}}>
                          by   {company}</span></h5>
                          <h5 className='text-main text-capitalize py-4'>
                            price : {price}
                          </h5>
                        <p className='text-capitalize text-title mt-3'>
                          short intro about product :
                          {description}
                        </p>
                        <div className='col-12 m-2 text-center'>
                          <Link
                            className='p-2 main-link '
                            to='/Products'
                            style={{margin:'.85rem'}}> back to products</Link>
                          <button
                            className='p-2 main-link'
                            style={{margin:'.85rem'}}
                            onClick={()=>addToCart(id)}
                          > add to cart </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      </ProductConsumer>
    </section>
  )
}
