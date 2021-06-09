import React, { /*useCallback,*/ useRef, useState } from 'react'
// import { useDebounce } from '../hooks/useDebounce'
import debounce from 'lodash.debounce'
import './styles.css'

const Debounce = () => {
  const [inputValue, setInputValue] = useState('')
  const [debounceValue, setDebounceValue] = useState('')
  // const delayedCallback = useCallback(
  //   debounce(v => setDebounceValue(v), 1000),
  //   []
  // )
  // const [debouncedState, setDebouncedState] = useDebounce(inputValue)
  const delayedCallback = useRef(debounce(v => setDebounceValue(v), 1000))

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setInputValue(value)
    // setDebouncedState(value)
    delayedCallback.current(value)
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
          {/* Debounced value: <strong>{debouncedState}</strong> */}
          Debounced value: <strong>{debounceValue}</strong>
        </span>
      </div>
    </div>
  )
}

export default Debounce
