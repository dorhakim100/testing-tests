import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          margin: '10px auto',
        }}
      >
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}
