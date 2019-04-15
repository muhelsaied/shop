import React from 'react'
import { ProductConsumer } from '../../context/context'
import Title from '../title'
import Product from '../product'

export default function Deals() {
      return(
        <ProductConsumer>
          {
            value =>{ 
              const { dealProducts } = value;
              return(
                <section className="py-5">
                    <div className='container'>
                      <Title title='Hot Deals' center/>
                      {/* product */}
                      <div className='row py-3'>
                        {
                          dealProducts.map(product => (
                            <Product key={product.id} product={product}/>
                          ) )
                        }
                      </div>
                      
                    </div>
              </section>
            )
            }
          }
        </ProductConsumer>
      )

  }