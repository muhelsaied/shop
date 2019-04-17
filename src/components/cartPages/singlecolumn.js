import React from 'react'

export default function SingleColumn({text}) {
  return (
      <div className='col-lg-2'>
            <p className='text-uppercase text-main'>
              {text}
            </p>
          </div>
  )
}
