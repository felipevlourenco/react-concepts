import { useRef, useState } from 'react'
import AutoComplete from './AutoComplete'
import Counter from './Counter'
import Fetch from './Fetch'
import Modal from './Modal'
import Palindrome from './Palindrome'
import Todo from './Todo'
import Debounce from './Debounce'
import './App.css'
import FowardRef from './FowardRef'

function App(props) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  const style = {
    backgroundColor: props.hovered ? 'red' : 'white'
  }

  const testClick = () => {
    console.log(ref.current)
  }

  return (
    <div className="App" style={style}>
      <FowardRef ref={ref} onClick={testClick}>
        Test buttons
      </FowardRef>
      {/* <Counter />
      <Fetch />
      <AutoComplete />
      <Todo />
      <Palindrome />
      <Debounce />
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} text="<App> Modal" /> */}
    </div>
  )
}

export default App
