import React, { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import './styles.css'

const Debounce = () => {
  const [inputValue, setInputValue] = useState('')
  const [debouncedState, setDebouncedState] = useDebounce(inputValue)

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setInputValue(value)
    setDebouncedState(value)
  }

  return (
    <div className="debounce">
      <h2>Debounce test</h2>
      <div className="input-area">
        <label>Input: </label>
        <input value={inputValue} onChange={handleChange} />
      </div>
      <div className="result-area">
        <span>
          Input value: <strong>{inputValue}</strong>
        </span>
        <span>
          Debounced value: <strong>{debouncedState}</strong>
        </span>
      </div>
    </div>
  )
}

export default Debounce
