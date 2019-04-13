import React from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'
export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return(
            <FooterWrapper>
              <div className='container py-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <p className='text-capitalize'>
                      copywright &copy; tech store  
                      {new Date().getFullYear() } .all rights reserved                 
                      </p>
                  </div>
                  <div className='col-md-6 container-link'>
                    {value.soicalLinks.map(link =>{
                      return(
                          <a 
                          key={link.id}
                          href={link.url} 
                          target='_blank'
                          rel="noopener noreferrer"
                          className='col-2' >{link.icon}</a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </FooterWrapper>
        )}
         }
    </ProductConsumer>
  )
}



const FooterWrapper = styled.footer`
display:flex;
background:var(--mainBlack);
flex-direction:row;
justify-content:space-around;
color:var(--mainGrey);
font-size:1.5rem;
.container-link{
  display:flex;
flex-direction:row;
}
.icon{
color:var(--mainGrey)
}
.icon:hover{
  filter:brightness(30%);
  font-size:1.6rem;
  color: var(--mainWhite);
  cursor: pointer;
}

`