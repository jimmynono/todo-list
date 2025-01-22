import PropTypes from "prop-types";

function TodoListForm(props) {
  const {itemToAdd, setItemToAdd, setTodos, todos} = props;
  
  const addItem = (event) => {
    event.preventDefault()
    if (itemToAdd !== '' ) {
      setTodos([...todos, itemToAdd])
    }
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

TodoListForm.propTypes = {
  itemToAdd: PropTypes.string,
  setItemToAdd: PropTypes.func,
  setTodos: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.string)

}

export default TodoListForm