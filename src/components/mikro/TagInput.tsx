import React, { useState } from 'react'

function TagInput({ tags, setTags }) {
  const [input, setInput] = useState('')

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim() !== '') {
      e.preventDefault()
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()])
      }
      setInput('')
    }
  }

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div
      className='tag-input-container'
      style={{
        border: '1px solid #ccc',
        padding: '8px',
        borderRadius: '8px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          style={{
            background: '#eee',
            borderRadius: '12px',
            padding: '4px 8px',
            margin: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {tag}
          <span
            onClick={() => removeTag(index)}
            style={{ marginLeft: '8px', cursor: 'pointer' }}
          >
            ×
          </span>
        </div>
      ))}
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Type tags and press enter'
        style={{
          color: '#70CDE5',
          flex: 1,
          border: 'none',
          outline: 'none',
          minWidth: '120px',
          margin: '4px',
        }}
      />
    </div>
  )
}

export default TagInput
