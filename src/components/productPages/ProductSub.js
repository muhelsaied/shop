import React from 'react'
import { ProductConsumer } from '../../context/context'
import Title from '../title'
import Product from '../product'
import ProductFilter from './ProductFilter'
import { FaBox } from 'react-icons/fa'

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
                      
                      {/* filter product  */}
                      
                      <ProductFilter/>

                      {/* totla product count */}

                      <div className='row'>
                        <div className='col-10 mx-auto'>
                          <h5 className='text-title text-main text-capitalize'>
                            total products : {FilteredProducts.length}
                          </h5>
                        </div>
                      </div>
                      
                      <div className='row py-3'>
                        {
                          FilteredProducts.length === 0 ? (
                            <div className='col text-title text-center text-danger'>
                              <FaBox className='text-danger m-3' style={{fontSize:'50px'}}/>
                              <h2 className='text-danger m-3 p-4'>No result for your search</h2>
                            </div>
                          ) : (
                          FilteredProducts.map(product => (
                            <Product key={product.id} product={product}/>
                          ) ) )
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

