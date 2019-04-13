import React from 'react'
import Title from '../title'
import styled from 'styled-components'

export default function Contact() {
  return (
    <FormWrapper className = 'py-3'>
        <div className = 'row  m-0'>
            <div className = 'col-10 mx-auto col-md-6 my-4'>
                <Title 
                    title='Your suggestion  &amp;Comments'
                    center='true'/>
                <form className= 'mt-5'
                    action="https://formspree.io/muhahmed2099@gmail.com" 
                    method="POST">
                {/* name */}
                    <div className='form-group'>
                        <input 
                            type="text" 
                            name ='fristname' 
                            placeholder="Enter your Name"
                            className='form-control'
                            required/>
                    </div>
                    {/* email */}
                    <div className='form-group'>
                        <input 
                            type="email" 
                            name ='email' 
                            placeholder="Enter your e-mail"
                            className='form-control'
                            required/>
                    </div>
                    {/* subject */}
                    <div className='form-group'>
                        <input 
                            type="text" 
                            name ='subject' 
                            placeholder="Subject"
                            className='form-control'
                            required/>
                    </div>
                    {/* message */}
                    <div className='form-group'>
                        <textarea 
                            type="text" 
                            name ='message' 
                            rows='10'
                            placeholder="Subject"
                            className='form-control'
                            required/>
                    </div>
                    {/* buttun */}
                    <div className='form-group'>
                        <input 
                            type="submit" 
                            value="Send"
                            className='form-control btn btn-primary'/>
                    </div>                            
                </form>
            </div>
        </div>
    </FormWrapper>
  )
}

const FormWrapper = styled.section`
/* background:var(--mainGrey); */
`