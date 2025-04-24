import React, { useEffect, useState } from 'react'

const ImagePicker: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://example.com/api/image') // API returning an image
        const blob = await response.blob()
        const imageObjectUrl = URL.createObjectURL(blob)
        setImageUrl(imageObjectUrl)
      } catch (error) {
        console.error('Failed to fetch image:', error)
      }
    }

    fetchImage()
  }, [])

  return (
    <div>
      <h2>Fetched Image:</h2>
      {imageUrl ? (
        <img src={imageUrl} alt='Fetched' style={{ width: '200px' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ImagePicker
