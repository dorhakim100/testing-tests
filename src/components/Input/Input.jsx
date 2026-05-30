import { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('')

  return (
    <div>
      <h2>Input</h2>
      <p>Value: {value}</p>
      <div className='cmp-container'>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setValue('')}>Clear</button>
      </div>
    </div>
  )
}
