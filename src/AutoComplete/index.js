import React, { useState } from 'react'

const AutoComplete = () => {
  const array = ['Adam', 'Ailly', 'Felipe', 'Fevin', 'Fernando']
  const [inputValue, setInputValue] = useState('')
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([])

  const autoComplete = event => {
    const {
      target: { value }
    } = event
    setInputValue(value)
    setAutoCompleteOptions(
      value.length ? array.filter(el => el.toLowerCase().indexOf(value.toLowerCase()) >= 0) : []
    )
  }

  const selectOption = (event, option) => {
    setInputValue(option)
    setAutoCompleteOptions([])
  }

  return (
    <div style={{ margin: 30, width: 200 }}>
      <input value={inputValue} onChange={autoComplete} style={{ width: 200 }} />
      {autoCompleteOptions.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 200
          }}
        >
          {autoCompleteOptions.map(option => (
            <span
              key={option}
              onClick={event => selectOption(event, option)}
              style={{ width: '100%', padding: 4, cursor: 'pointer', border: '1px solid #ccc' }}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default AutoComplete
