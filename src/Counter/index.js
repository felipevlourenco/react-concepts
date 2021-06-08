import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        {' '}
        -{' '}
      </button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}> + </button>
    </div>
  )
}

export default Counter
