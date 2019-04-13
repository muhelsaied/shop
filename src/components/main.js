import React, { Component } from 'react';
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'
export default function Main( {img, title, max, children}){
        return (
            <MainWrapper max={max} img={img}>
                <div className='banner'>
                    <h1 className="title">{title}</h1>
                    {children}
                </div>
            </MainWrapper>
        );
    }

const MainWrapper = styled.div`
display:flex;
text-align:center;
align-items: center;
justify-content:center;
min-height:${props => props.max ? '100vh':'70vh'};
color:var(--mainWhite);
background:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)),url(${props => props.img}) center;
background-repeat: no-repeat;
background-size:cover;
    .title {
        padding-top: 2rem;
        font-size: 3.5rem;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
    }
`;


/* set default background */

Main.defaultProps = {
    img: mainBcg
};