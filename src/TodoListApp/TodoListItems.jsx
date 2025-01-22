import PropTypes from "prop-types";

function TodoListItems(props) {
  const {todos, setTodos, title} = props;

  const handleClick = (idx) => {
    const arrOne = todos.slice(0, idx)
    const arrTwo = todos.slice(idx + 1)

    const updatedTodo = todos[idx]
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    const newArr = [...arrOne, updatedTodo , ...arrTwo]
    
    setTodos(newArr)  
  }
  return (
    <>
      <h2>{title ? title : 'Peter'}</h2>
        <ul>
          {todos.map((todo, index) => {
            if (todo.isCompleted === false) {

              return <li key={index}>{todo.text}<button onClick={() => handleClick(index)}>{todo.isCompleted ? 'Done' : 'Undo'}</button></li>
            }
          })}
        </ul>
      <h2>Todo List Items Done</h2>
        <ul>
          {todos.map((todo, index) => {
            if (todo.isCompleted === true) {

              return <li key={index}>{todo.text}<button onClick={() => handleClick(index)}>{todo.isCompleted ? 'Undo' : 'Done'}</button></li>
            }
          })}
        </ul>
    
    </>
  )
}

TodoListItems.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })).isRequired,
  setTodos: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default TodoListItems