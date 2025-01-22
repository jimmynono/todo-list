import PropTypes from "prop-types";


function TodoListItems(props) {
  const {todos} = props;
  return (
    <>
    <h2>Todo List Items</h2>
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo}</li>
      })}
    </ul>
    
    </>
  )
}

TodoListItems.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string)
}

export default TodoListItems