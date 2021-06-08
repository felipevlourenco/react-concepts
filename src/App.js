import { useState } from 'react'
import './App.css'
import AutoComplete from './AutoComplete'
import Counter from './Counter'
import Fetch from './Fetch'
// import detectHover from './HOC/detectHover'
import Modal from './Modal'
import Palindrome from './Palindrome'
import Todo from './Todo'

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
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  )
}

// export default detectHover(App)
export default App
