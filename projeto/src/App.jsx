import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from "./components/Home/home"
import  Header  from "./components/Header/header" 
import Galeria from "./components/Galeria/galeria"
import Episodios from "./components/Episodios/episodios"
import './App.css'

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home/>}></Route>

        <Route path='/galeria' element={<Galeria/>}></Route>

        <Route path='/episodios' element={<Episodios/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
