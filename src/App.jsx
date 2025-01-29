import { ThemeContext } from './context/ThemeContext'
import TodoListApp from './TodoListApp/TodoListApp'
import './App.css'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  const updateTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else  {
      setTheme('light')
    }
  }
  
  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>


      <TodoListApp />
      {/* <h1 className="headline" itemID="thisthing">HELLOW</h1> */}
      
    </ThemeContext.Provider>
  )
}

export default App
