import React from 'react'
import { ProductConsumer } from '../../context/context'
import Title from '../title'
import Product from '../product'

export default function ProductSub() {
      return(
        <ProductConsumer>
          {
            value =>{ 
              const { FilteredProducts } = value;
              return(
                <section className="py-5">
                    <div className='container'>
                      <Title title='Pick Product' center/>
                      {/* product */}
                      <div className='row py-3'>
                        {
                          FilteredProducts.map(product => (
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

