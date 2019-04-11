import React from 'react'
import { ProductConsumer } from '../context'
export default function Home() {
  return (
    <div>
      <ProductConsumer>{ value => {
        console.log(value)
        return <h1>HomePage</h1>
      } }</ProductConsumer>
    </div>
  )
}

