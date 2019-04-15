import React from 'react'
import Pargraph from './pargaph'
import styled from 'styled-components'

export default function MorePage({text}) {
    // const {handleInfo}= this.handleInfo;
  return (
    <InfoWrapper className='row'  >
        <div className='col-sm-10 mx-auto col-md-6 col-lg-6 my-3' >
            <Pargraph 
            text='Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            Lorem Ipsum has been the industry'/>
            <Pargraph 
            text='Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old'/>
            <Pargraph
            text='it is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using '/>
                <Pargraph 
            text='Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            Lorem Ipsum has been the industry'/>
            <Pargraph 
            text='Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old'/>
            <Pargraph
            text='it is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using '/>
        </div>
        <div className='col-sm-10 mx-auto col-md-6 col-lg-6 my-3'>
            <Pargraph 
            text='Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            Lorem Ipsum has been the industry'/>
            <Pargraph 
            text='Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old'/>
            <Pargraph
            text='it is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using '/>
                <Pargraph 
            text='Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            Lorem Ipsum has been the industry'/>
            <Pargraph 
            text='Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old'/>
            <Pargraph
            text='it is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using '/>
        </div>
    </InfoWrapper>
)
  }

  const InfoWrapper = styled.div`
  `