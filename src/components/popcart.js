import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function PopCart(){
        return (
            <ProductConsumer>
                {
                    value =>{
                        const { closeCart, cartOpen, cart, cartTotal, removeCartItem, clearCart } = value;
                        if (cart.length === 0 ){
                          return(
                            <CartWrapper show = {cartOpen} onClick={closeCart}>
                              <div className='col-12 text-main text-capitalize text-center mx-auto p-3 mt-5'>
                                <h1 className='text-title py-3 m-3'> cart is epmty</h1>
                                <Link 
                                  to='/'
                                  className='btn btn-warning mx-auto'>
                                  keep shopping
                                  </Link>
                              </div>
                            </CartWrapper>
                          )
                        }
                        return(
                            <CartWrapper show = {cartOpen} onClick={closeCart}>
                                      <ul className='list-group'>
                                        {
                                          cart.map(item=>{
                                            // console.log(cart)
                                            return(
                                            <li className = 'mt-1 list-group-item list-group-item-action' key ={item.id}>
                                            <div className='row text-capitalize rounded'>
                                            <div className ='col-12 mb-2'>
                                              <h3 className='text-main text-center'>{item.title}</h3>
                                            </div>
                                              <div className ='col-3'>
                                                  <img 
                                                  // src={item.image}
                                                  src={`../${item.image}`}
                                                  width='30px' alt ='icon'/>
                                              </div>
                                              <div className ='col-9 cart-p'>
                                                  <p className = 'text-main'>pecies : {item.counter}</p>
                                                  <p className = 'text-main'>price $ {item.price}</p> 
                                                  <p className = 'text-main'>total $ {item.total}</p>
                                              </div>
                                              <div className='mt-2 col-12 text-center text capitalize text-title text-main'>
                                                <Link className='btn btn-primary text-capitalize m-1'
                                                  to={`/product/${item.id}`}>view product</Link>
                                                  <button className='btn btn-danger text-center text capitalize m-1'
                                                  onClick={()=>removeCartItem(item.id)}>remove product</button>
                                              </div>
                                            </div>
                                            </li>
                                            )
                                          })
                                        }
                                        <div className='mt-5 col-12 text-center text capitalize text-title text-main'>
                                          <h4>cart Total : ${cartTotal}</h4>
                                        </div>
                                        <div className='mt-2 col-12 text-center text capitalize text-title text-main'>
                                          <Link className='btn btn-warning text-capitalize m-1'
                                            to='/cart'>Go to cart</Link>
                                          <button className='btn btn-danger text-center text capitalize m-1'
                                          onClick = {()=>clearCart()}>epmty cart</button>
                                        </div>
                                      </ul>
                            </CartWrapper>
                        )
                    }
                }
            </ProductConsumer>
        );
      }
const CartWrapper = styled.div`
    position: fixed;
    right: 10px;
    top: 75px;
    z-index:100;
    background: var(--mainWhite);
    color: var(--primaryColormainWhite);
    border-radius: 10px;
    max-width: 400px;
    width:100%;
    opacity:${props=>props.show?".9":"0"};
    height: ${props=>props.show?"70vh":"0"};
    /* width: ${props=>props.show?"100%":"0"}; */
    text-align:center;
    box-shadow: 1px 10px 26px 1px var(--primaryRGBA);
    transition: var(--easeTransition);
    transform:${props=>props.show?"translateX(0)":"translateX(100%)"};
    /* display:${props=>props.show?"block":"none"}; */
    .cart-p{
        display:${props=>props.show?"flex":"none"};
        flex-direction:row;
        padding :2px;
        justify-content:space-around;
      }
    @media (max-width: 680px){
      width:90vw;
      height: ${props=>props.show?"90vh":"0"};
      margin: 0 auto;
      /* border-radius:1px; */
      top:71px;
    }

    overflow:auto;
    padding:1rem;
    ul{
      padding:0 !important;
    }
    `;