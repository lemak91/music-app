import { useState } from 'react'
import Nav from './components/Nav'
import Login from './components/Login' 
import Dashboard from './components/Dashboard'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const handleLogin = () => {
    setisLoggedIn(!isLoggedIn)
  }


  return (
    <>
      <Nav />
      {isLoggedIn ? <Dashboard /> : <Login handleLogin={handleLogin} />}
    </>
  );
}

export default App
