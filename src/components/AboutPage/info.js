import React from 'react'
import Title from '../title';
import Pargraph from './pargaph'
// import { Link } from 'react-router-dom'
import InfoBcg from '../../images/aboutBcg.jpeg'
export default function Info() {
  return (
      <section className = 'py-4' style={{background:'var(--mainGrey)'}}>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-10 mx-auto col-md-6 col-lg-6 my-3'>
                    <img src={InfoBcg} alt='info-small-img' 
                    className="img-fluid img-thumbnail d-block"
                    style={{background:'var(--primaryColor)'}}/>
                </div>
                <div className='col-sm-10 mx-auto col-md-6 col-lg-6 my-3'>
                        <Title title='about us' center='true'/>
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
                        <button className='main-link'
                        to = '/'
                        type='button'
                        style={{marginTop:'1.5rem'}}
                        // onClick={showFull}
                        >
                            More Info
                        </button>
                       

                </div>
                <div className='container' style= {{display:'None'}} id='toggleInfo'>
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
                    </div>
            </div>
        </div>
      </section>

  )
}

// const showFull = ()=>{
//    const div = document.getElementById('#toggleInfo');
//    div.style.display('block');

// }
