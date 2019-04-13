import React from 'react'
import Main from '../components/main'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div>
      <Main title='Hot Deals' max = 'true'>
        <Link 
          to='/products'
          className='main-link'
          style={{margin:'2rem'}}>
          Find your Product
          </Link>
      </Main>
    </div>
  )
}

