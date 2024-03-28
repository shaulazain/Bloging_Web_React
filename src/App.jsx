import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer'

function App() {

  return (
    <>
      
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
