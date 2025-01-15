import { useState } from "react"

function TodoListForm(props) {
  const {itemToAdd, setItemToAdd, setTodos, todos} = props;
  // const [itemToAdd, setItemToAdd] = useState('')
  // const [todos, setTodos] = useState([])
  
  const addItem = (event) => {
    event.preventDefault()
    setTodos([...todos, itemToAdd])
  }


  return (
    <div>
      <form onSubmit={addItem}>
        <label htmlFor="todo-input" >Todo: </label>
        <input 
            type="text" 
            id="todo-input" 
            onChange={(event) => setItemToAdd(event.target.value)}/>
        <button type="submit" >Add</button>
      </form>
    </div>
  )
}

export default TodoListForm