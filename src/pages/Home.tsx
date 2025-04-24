import React from 'react'
import { useState } from 'react'
import PicContainer from '../components/PicContainer'
function Home() {
  const picArray = Array.from({ length: 24 }, (_, i) => i)
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-4 gap-4'>
          {picArray.map((id) => (
            <PicContainer key={id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
