import { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('')

  return (
    <div>
      <h2>Input</h2>
      <p>Value: {value}</p>
      <div className='cmp-container'>
        <input
          placeholder='Type something...'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setValue('')}>Send</button>
      </div>
    </div>
  )
}
