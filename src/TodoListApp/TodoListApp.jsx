import { useState, useContext } from "react"

import TodoListForm from "./TodoListForm"
import TodoListItems from "./TodoListItems"
import { ThemeContext } from "../context/ThemeContext"

function TodoListApp() {
  const {theme, updateTheme} = useContext(ThemeContext)
  // all state is kept track here
  const [todos, setTodos] = useState([
    {text: 'wash dog', isCompleted: false}, 
    {text: 'mop floor', isCompleted: false}, 
    {text:'do taxes', isCompleted: false}
  ])
  const [itemToAdd, setItemToAdd] = useState('')

  const handleClick = (newVal) => {
    updateTheme(newVal)
  }

  const lightMode = {'color': 'purple', 'backgroundColor': 'yellow'}
  const darkMode = {'color': 'green', 'backgroundColor': 'red'}

  return (
    <div>
      <h1 style={theme === 'light' ? lightMode : darkMode } className={theme === 'light' ? 'danceMode' :  'notDanceMode'}>Todos!!</h1>
      <TodoListForm 
        itemToAdd={itemToAdd} 
        setItemToAdd={setItemToAdd} 
        setTodos={setTodos} 
        todos={todos}
      />
      <button onClick={() => handleClick()}>Update Theme</button>
      <TodoListItems title='Todo List Items Not Done' todos={todos}  setTodos={setTodos} />
      </div>
  )
}

export default TodoListApp