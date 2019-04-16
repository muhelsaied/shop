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
            const { singleProduct, addTocart, loading} = value ;
            if (loading) {
              console.log('loading')
              return (
              <div className='container my5 bg-primary' style={{height:'300px',width:'300px'}}>
                <img src= {svg} alt='laoodinImmage'/>
              </div>
              )
            }
            const { id, title, company, description, image} = singleProduct;
            return (
              <div className='container my-5'>
                <div  className ='card rounded'>
                  <div className ='row'>
                    <div className='col-10 mx-auto col-sm-10 col-md-8 col-lg-6'>
                      <div className='img-container'>
                        <img 
                          // src={image} 
                          src = {`../${image}`}
                          alt='title' 
                          className='img-fluid'/>
                      </div>
                    </div>
                    <div className='col-10 mx-auto col-sm-10 col-md-8 col-lg-6'>
                      <h1 className=''>{title}</h1>
                      <h5><span className='bg-warning rounded p-1'
                        style={{fontSize:'17px',fontFamily:'var(--specialFont)'}}>
                          by {company
                          }</span></h5>
                        <p>
                          {description}
                        </p>
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
