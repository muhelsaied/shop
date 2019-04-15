import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch, FaCartPlus } from 'react-icons/fa'
import { ProductConsumer } from '../context'


export default function Product({product}){
        return (
            <ProductConsumer>
                    {
                        value =>{
                            // console.log(value);
                            const { addToCart, setSingleProduct} = value;
                            // console.log(product)
                            return (
                            <ProductWrapper className='col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-4'>
                                <div className='card '>
                                    <div className='img-container'>
                                        <img src={product.image} 
                                            alt={product.title}
                                            className='card-img-top p-5'
                                            style={{height:'300'}}/>
                                    </div>
                                    <div className='float-icons'>
                                        <Link 
                                            to={`./product/${product.id}`}
                                            onClick = {() => setSingleProduct(product.id)}
                                            >
                                            <FaSearch className='icon'/>
                                        </Link>
                                        <FaCartPlus className='icon'
                                            onClick = {() => addToCart(product.id)}/>
                                    </div>
                                    <div className ='card-body d-flex justify-content-around'>
                                        <p className='mb-0'>{product.title}</p>
                                        <p className='mb-0 text-main bg-warning'>{product.price} $</p>
                                    
                                    </div>
                                </div>
                            </ProductWrapper>
                            )
                        }
                    }
            </ProductConsumer>
        );
    };

const ProductWrapper = styled.div`
    color:var(--primaryColor);
    .card{
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
        transition: var(--easeTransition);
        height: 100%;
        border-radius:15px;
    }
    .card:hover{
        box-shadow: 10px 8px 10px 5px rgba(0,0,0,0.5);
        cursor:pointer;
    }
    .card-img-top {
    transition: var(--easeTransition);
  }
  .card:hover .card-img-top{
      transform:scale(1.2);
      opacity:.3;
  }
  .img-container{
      position:relative;
  }
    .float-icons{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition:var(--easeTransition);
    }
    .card:hover .float-icons{
        opacity:1;
    }
    .icon{
        font-size: 2.5rem;
        margin: 1rem;
        padding:0.25rem;
        color:var(--primaryColor);
        background:var(--maingrey)
    }
    .card-body {
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .text-main{
      border-radius:10px;
      padding:.25rem;
  }
  .card:hover .text-main{
      background-color:var(--primaryColor)!important;
      color:var(--mainWhite);
  }
  @media (max-width:500px) {
      .icon{
        font-size: 2rem;
        margin: .4rem;
      }
      .card-body{
          flex-direction:column;
          text-align:center;
      }
      .text-main{
          margin: 0 auto;
          margin-top:.75rem;
          width:50%;

      }
  }
`