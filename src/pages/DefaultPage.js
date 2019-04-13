import React from 'react';
import Main from '../components/main';
import defaultBcg from '../images/defaultBcg.jpeg'
import { Link } from 'react-router-dom' 
export default function Default() {
  return (
    <div>
     <Main img={defaultBcg} max = "true" title=' ): 404'>
        <h3 className='text-uppercase m-2'> can not found your page </h3>
        <Link 
          to='/'
          className='main-link'
          style = {{marginTop:"2.5rem"}}>
          Back To Home Page
        </Link>
     </Main>
    </div>
  )
}
