import PropTypes from "prop-types";

function TodoListForm(props) {
  const {itemToAdd, setItemToAdd, setTodos, todos} = props;
  
  const addItem = (event) => {
    event.preventDefault()
    if (itemToAdd !== '' ) {
      setTodos([...todos, {text: itemToAdd,}])
    }
  }

  const clearItems = () => {
    setTodos([])
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <label htmlFor="todo-input" >Todo: </label>
        <input 
            type="text" 
            id="todo-input" 
            value={itemToAdd}
            onChange={(event) => setItemToAdd(event.target.value)}/>
        <button type="submit" >Add</button>
      </form>
      <button onClick={() => clearItems()}>Clear</button>
    </div>
  )
}

TodoListForm.propTypes = {
  itemToAdd: PropTypes.string,
  setItemToAdd: PropTypes.func,
  setTodos: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    isCompleted: PropTypes.bool
  }))

}

export default TodoListForm