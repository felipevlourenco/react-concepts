import React, { useState } from 'react'
import detectHover from './../HOC/detectHover'
import './styles.css'

const Palindrome = () => {
  const [inputValue, setInputValue] = useState('')
  const [isPalindrome, setIsPalindrome] = useState(false)

  const handleOnChange = event => {
    const {
      target: { value }
    } = event
    setInputValue(value)

    // Reseting the check
    if (value.length) {
      setIsPalindrome(false)
    }
  }

  const isStringPalindrome = str => {
    const original = str.toLowerCase()
    return original.split('').reverse().join('') === original
  }

  const checkPalindrome = () => {
    setIsPalindrome(isStringPalindrome(inputValue))
    setInputValue('')
  }

  return (
    <div className="container">
      <div className="input-area">
        <input value={inputValue} onChange={handleOnChange} />
        <button onClick={checkPalindrome}>Check Palindrome</button>
      </div>
      {isPalindrome && (
        <div className="result">
          <span>HELL YEAH!</span>
        </div>
      )}
    </div>
  )
}

export default detectHover(Palindrome)
