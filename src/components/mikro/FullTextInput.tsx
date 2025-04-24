import React from 'react'

function FullTextInput({ fullText, setFullText }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <label
        htmlFor='fullText'
        style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 'bold',
          color: '#4282c2',
        }}
      >
        Description
      </label>
      <textarea
        id='fullText'
        value={fullText}
        onChange={(e) => setFullText(e.target.value)}
        placeholder='Enter description or full text here...'
        rows={6}
        style={{
          color: '#70CDE5',
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          resize: 'vertical',
        }}
      />
    </div>
  )
}

export default FullTextInput
