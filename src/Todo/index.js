import React, { useState } from 'react'

const Todo = () => {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setInputValue(value)
  }

  const addTodo = () => {
    setTodoList([...todoList, { title: inputValue, id: +new Date() }])
    setInputValue('')
  }

  const deleteTodo = index => {
    const list = [...todoList]
    list.splice(index, 1)
    setTodoList(list)
  }

  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map(({ id, title }, index) => (
          <li key={id} onClick={() => deleteTodo(index)}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
