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

export default TodoListItems