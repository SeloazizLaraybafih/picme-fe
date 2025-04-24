import React, { useRef, useState } from 'react'
import TagInput from '../components/mikro/TagInput'
import FullTextInput from '../components/mikro/FullTextInput'
import EventDropdown from '../components/mikro/EventDropdown'

function Sendpic() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [tags, setTags] = useState([])
  const [fullText, setFullText] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log(URL.createObjectURL(file))
      setImageUrl(URL.createObjectURL(file))
    }
  }

  const handleSendClick = async () => {
    const file = fileInputRef.current?.files?.[0]
    if (!file) return
    console.log(file)
    if (selectedEvent === null) {
      console.error('Event ID is missing')
      return
    }
    console.log(selectedEvent)

    const tagString = tags.join(',')

    const formData = new FormData()
    formData.append('image', file)
    formData.append('event_id', String(selectedEvent))
    formData.append('tags', tagString)
    formData.append('full_text', fullText)

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      })
      console.log('resp', response)

      if (response.ok) {
        const data = await response.json()
        console.log('Upload success:', data)
      } else {
        console.error('Upload failed:', response.statusText)
      }
    } catch (error) {
      console.error('Error during upload:', error)
    }
  }

  return (
    <>
      <div className='flex min-h-screen pt-5 flex-col justify-center items-center'>
        <button
          onClick={handleButtonClick}
          className='bg-amber-50 rounded-lg p-4 cursor-pointer mb-5'
        >
          Choose Picture
        </button>
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <div className='w-[40rem] rounded-lg flex justify-center items-center'>
          {imageUrl && (
            <div>
              <img
                className='w-60 h-60'
                src={imageUrl}
                alt='Selected'
                style={{ width: '100%' }}
              />
              <div className='mt-6'>
                <div className='mb-3'>
                  <EventDropdown
                    selectedEvent={selectedEvent}
                    setSelectedEvent={setSelectedEvent}
                  />
                </div>
                <TagInput tags={tags} setTags={setTags} />
                <FullTextInput fullText={fullText} setFullText={setFullText} />
              </div>

              <button className='mt-10 w-20' onClick={handleSendClick}>
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Sendpic
