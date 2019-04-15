import React from 'react'
import Main from '../components/main'
import { Link } from 'react-router-dom'

import FeatureProduct from '../components/homePage/featuresProduct'
import Services from '../components/homePage/services'




export default function Home() {
  return (
    <div>
      <Main title='Hot Deals' max = 'true'>
        <Link 
          to='/Deals'
          className='main-link'
          style={{margin:'2rem'}}>
          Hot deals
          </Link>
      </Main>
      <Services/>
      <FeatureProduct/>

    </div>
  )
}

