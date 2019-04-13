import React from 'react'
import Main from '../components/main'
import ContactImg from '../images/contactBcg.jpeg'
import Contact from '../components/contactPages/contact'

export default function ContactPage() {
  return (
    <div>
      <Main img= {ContactImg}/>
      <Contact/>
    </div>
  )
}
