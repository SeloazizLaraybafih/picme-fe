import React, { useEffect, useState } from 'react'
import PicContainer from '../components/PicContainer'

type PhotoType = {
  id: number
  preview_path: string
}

function Home() {
  const [photos, setPhotos] = useState<PhotoType[]>([])
  useEffect(() => {
    // Fetch data from your backend API
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:8000/photo')
        const data = await response.json()
        console.log('Fetched photos:', data)
        setPhotos(data)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    fetchPhotos()
  }, [])
  const picArray = Array.from({ length: 24 }, (_, i) => i)
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-4 gap-4'>
          {photos.map((photo) => (
            <PicContainer photo={photo} key={photo.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
