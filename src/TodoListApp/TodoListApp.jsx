import { useState } from "react"

import TodoListForm from "./TodoListForm"
import TodoListItems from "./TodoListItems"

function TodoListApp() {
  // all state is kept track here
  const [todos, setTodos] = useState([])
  const [itemToAdd, setItemToAdd] = useState('')

  return (
    <>
      <h1>Todos!!</h1>
      <TodoListForm 
        itemToAdd={itemToAdd} 
        setItemToAdd={setItemToAdd} 
        setTodos={setTodos} 
        todos={todos}
      />
      <TodoListItems todos={todos} />
      </>
  )
}

export default TodoListApp