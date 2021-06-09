import { useState } from 'react'
import AutoComplete from './AutoComplete'
import Counter from './Counter'
import Fetch from './Fetch'
import Modal from './Modal'
import Palindrome from './Palindrome'
import Todo from './Todo'
import './App.css'

function App(props) {
  const [isOpen, setIsOpen] = useState(false)

  const style = {
    backgroundColor: props.hovered ? 'red' : 'white'
  }

  return (
    <div className="App" style={style}>
      <Counter />
      <Fetch />
      <AutoComplete />
      <Todo />
      <Palindrome />
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} text="<App> Modal" />
    </div>
  )
}

export default App
