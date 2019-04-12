import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
export default function SideBar() {
  return (
    <ProductConsumer>
      {
        value => {
          const { sidbarOpen, links, handleSide } =value;
          return (
          <SideWrapper show={sidbarOpen}>
            <ul>
                {links.map(link =>{
                  return(
                  <li key = {link.id} >
                  <Link 
                    to = {link.path}
                    className="side-link">
                    {link.text}
                    </Link>
                </li>
                  )
                })
              }
            </ul>
          </SideWrapper>
          )}
      }
    </ProductConsumer>
  )
}

const SideWrapper = styled.nav`
  position: fixed;
  top:69px;
  z-index:100;
  left:0;
  width:100%;
  height:100%;
  background:var(--primaryColor);
  transition: var(--easeTransition);
  transform:${props => props.show ?"translateX(0)": "translateX(-100%)"};
  ul{
    list-style:none;
    padding:0 !important;
    margin:0 !important;
  }
    .side-link{
      display:block;
      font-size:1.5rem;
      text-transform:capitalize;
      color:var(--mainWhite);
      padding:0.5rem 1.5rem;
      background:transparent;
      transition: var(--easeTransition);
      text-decoration:none;
    }
      .side-link:hover{
        color:var(--mainWhite);
        padding-left:2.5rem;
        background:var(--primaryColor);
      }

@media (min-width: 680px){
  width:20rem;
}
`;