import React from 'react'
import { useState } from 'react'

function PicContainer({ photo }) {
  console.log(photo.preview_path)
  return (
    <>
      <div className='w-80 h-40 bg-amber-300 border-2 rounded-2xl'>
        <div
          className={`w-full h-full flex justify-center items-center cursor-pointer rounded-2xl`}
        >
          <img
            src={`http://localhost:8000/${photo.preview_path}`} // TODO : fetch data image from API or backend and display it in front end
            alt=''
          />
        </div>
      </div>
    </>
  )
}

export default PicContainer
