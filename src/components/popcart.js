import React from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';

export default function PopCart(){
        return (
            <ProductConsumer>
                {
                    value =>{
                        const { closeCart, cartOpen, cart } = value;
                        return(
                            <CartWrapper show = {cartOpen} onClick={closeCart}>
                                    <p>cart items {cart }</p>
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
    background: var(--primaryColor);
    color: var(--mainWhite);
    border-radius: 10px;
    max-width: 400px;
    width:100%;
    opacity:${props=>props.show?"1":"0"};
    /* width: ${props=>props.show?"100%":"0"}; */
    text-align:center;
    box-shadow: 1px 10px 26px 1px var(--primaryRGBA);
    transition: var(--easeTransition);
    transform:${props=>props.show?"translateY(0)":"translateY(1300%)"};

    @media (max-width: 680px){
      right: 0;
      border-radius:1px;
      top:71px;
    }
    `;