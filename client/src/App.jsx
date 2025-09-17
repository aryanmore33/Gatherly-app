import { useState } from 'react'
import './App.css'
import TopNavbar from './components/Layout/TopNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavbar />
    </>
  )
}

export default App
