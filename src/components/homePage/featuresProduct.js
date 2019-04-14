import React from 'react';
import Product from '../product';
import { Link } from 'react-router-dom';
import Title from '../title';
import { ProductConsumer } from '../../context'


export default function FeatureProduct() {
        return (
            <section className = 'py-5' style={{background:'#dad4ec'}}>
                <div className='container' >
                {/* title */}
                    <Title title='featured Product' center='true' />
                    <div className='row'>
                    {/* product */}
                        <ProductConsumer>
                        {
                            value =>{
                                const { featuredProducts } = value;
                                return featuredProducts.map(product => (
                                <Product key ={product.id} product={product}>
                                </Product>
                                
                                ))
                            }
                        }
                        </ProductConsumer>
                    </div>
                    <div className="col text-center">
                        <Link 
                            to='/products'
                            className='main-link mx-auto mt-5'>
                            Find Product
                        </Link>
                   </div>
                </div>
            </section>
        );
    }
