import React, { useState } from 'react'

type EventDropdownProps = {
  selectedEvent: number | null
  setSelectedEvent: React.Dispatch<React.SetStateAction<number | null>>
}

const EventDropdown: React.FC<EventDropdownProps> = ({
  selectedEvent,
  setSelectedEvent,
}) => {
  const events = [
    { id: 1, name: 'Music Concert' },
    { id: 2, name: 'Art Exhibition' },
    { id: 3, name: 'Food Festival' },
    { id: 4, name: 'Tech Conference' },
    { id: 5, name: 'Marathon Run' },
    { id: 6, name: 'Book Fair' },
    { id: 7, name: 'Film Screening' },
    { id: 8, name: 'Comedy Show' },
    { id: 9, name: 'Gaming Tournament' },
    { id: 10, name: 'Photography Workshop' },
  ]

  return (
    <div className='w-full'>
      <label
        htmlFor='event'
        className='block mb-2 text-sm font-medium text-cyan-700'
      >
        Select an event
      </label>
      <select
        id='event'
        value={selectedEvent ?? ''}
        onChange={(e) => setSelectedEvent(Number(e.target.value))}
        className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-cyan-700 focus:outline-none focus:ring focus:ring-blue-200'
      >
        <option value='' disabled hidden>
          Select an event
        </option>
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default EventDropdown
