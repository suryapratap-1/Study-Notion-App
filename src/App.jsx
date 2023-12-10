import './App.css'
import Footer from './components/UI Components/Footer'
import Navbar from './components/UI Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Provider store={store}>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Outlet />
        <Footer />
        <Toaster/>
      </Provider>
    </div>
  )
}

export default App
