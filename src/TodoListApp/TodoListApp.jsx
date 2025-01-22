import { useState } from "react"

import TodoListForm from "./TodoListForm"
import TodoListItems from "./TodoListItems"

function TodoListApp() {
  // all state is kept track here
  const [todos, setTodos] = useState([
    {text: 'wash dog', isCompleted: false}, 
    {text: 'mop floor', isCompleted: false}, 
    {text:'do taxes', isCompleted: false}
  ])
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
      <TodoListItems title='Todo List Items Not Done' todos={todos}  setTodos={setTodos} />
      </>
  )
}

export default TodoListApp