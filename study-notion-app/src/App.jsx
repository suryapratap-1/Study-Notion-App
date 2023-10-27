import './App.css'
import Footer from './components/UI Components/Footer'
import Navbar from './components/UI Components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className='w-screen h-screen overflow-x-hidden'>

      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default App
