import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext'
import TodoListApp from './TodoListApp/TodoListApp'
import './App.css'
// import Picture from './Picture'

function App() {
  // const msg = "Ron Swanson"
  // const imgSrc = 'https://miro.medium.com/v2/resize:fit:950/0*rS2RVUK6WBTkmaeO.jpg'
  // const imgAlt = 'Ron at desk'
  const [state, setState] = useState('light');
  // Update context function
  const updateTheme = () => {
    if (state === 'light') {
      setState('dark')
    } else {
      setState('light')
    }
  }
  
  return (
    <>
      {/* <h1>{msg}</h1>
      <Picture imgSrc={imgSrc} imgAlt={imgAlt} /> */}
      <ThemeContext.Provider value={{state, updateTheme}}>

      <TodoListApp />
      </ThemeContext.Provider>
    </>
  )
}

export default App
