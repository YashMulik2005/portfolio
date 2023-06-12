import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { ThemeContextProvider } from './components/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About />
      </div>
    </ThemeContextProvider>
  )
}

export default App
