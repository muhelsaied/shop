import React from 'react';
import { FaCartPlus, FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import Logo from '../images/logo.svg'

export default function NavBar() {
  return (
      <ProductConsumer>
        {
          value =>{
          const { cartItems, handleSide, handleCart } = value;
           return (
              <NavBarWapper>
                <div className='nav-center'>
                  <FaBars className="nav-icons" onClick={handleSide}/>
                  <img src={Logo} alt='logo_item'/>
                  <div className='nav-cart'>
                    <FaCartPlus className='nav-icons' onClick={handleCart}/>
                    <div className='cart-items'>{cartItems}</div>
                  </div>
                </div>
              </NavBarWapper>
            )
            }
        }
      </ProductConsumer>
  )
}

const NavBarWapper = styled.nav`
  font-size:25px;
  position:-webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding:1rem 1.25rem;
  background:var(--primaryColor);
  box-shadow:5px 5px 20px 10px var(--primaryRGBA);
    .nav-center{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin: 0 auto;
      top:0;
      max-width:1167px;
      color:var(--mainWhite);

    }
      .nav-icons{
        font-size: 1.5rem;
        cursor: pointer;
      }
      .nav-cart{
        position:relative;
      }
        .cart-items{
          font-size:.75rem;
          color:var(--primaryColor);
          background:var(--mainWhite);
          position:absolute;
          top:-4px;
          right:-6px;
          padding:0 5px;
          border-radius: 50%;
        }

`