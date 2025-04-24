import React from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  return (
    <>
      <div className='w-full sticky top-0 mb-4'>
        <div className='w-full h-24 bg-green-500 flex justify-between items-center px-64 rounded-b-lg'>
          <div
            className='cursor-pointer font-bold'
            onClick={() => navigate('/')}
          >
            Home
          </div>
          <div
            className='cursor-pointer font-bold'
            onClick={() => navigate('/Sendpic')}
          >
            Send Picture
          </div>
          <div
            className='cursor-pointer font-bold'
            onClick={() => navigate('/tes')}
          >
            Contact
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
