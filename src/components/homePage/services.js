import React, { Component } from 'react';
import styled from 'styled-components'
import { IconData } from '../../context/homeIcon'
class Services extends Component {
    state={
        services:IconData
    };
    render() {
        return (
            <ServicesWrapper className='row m-0'>
                {
                    this.state.services.map( item => {
                        return(
                            <div className ='col-sm-10  mx-auto col-md-4 py-3'
                                key = {item.id}>
                                <div className='row m-0 fix'>
                                    <div className='col-10 service-icon'>{item.icon}</div>
                                    <div className='col-10 mt-3'>
                                        <h3 className="text-capitalize">{item.title}</h3>
                                        <p className='text-lead  mx-auto my-4'>{item.text}</p>
                                    </div> 
                                </div>   
                            </div> 
                        )
                    })
                }
                   
            </ServicesWrapper>
        );
    }
}

export default Services;

const ServicesWrapper = styled.section`
    text-align:center;
    align-content:center;
    justify-content:space-around;
    background:rgb(63, 40, 220,0.95);
    color:var(--mainWhite);
    font-size:1.5rem;
    
    .service-icon{
        font-size:3.5rem;
        padding:1rem;
    }
    .fix{
        text-align:center;
        align-content:center;
        justify-content: space-around;
        transition:var(--easeTransition);
    }
    .fix:hover{
        /* filter:brightness(20%); */
        background:var(--mainWhite);
        color:rgb(63, 40, 220,0.95);
    }
    `