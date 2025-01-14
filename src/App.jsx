
import './App.css'
import Header from './components/Header/header'
import NavBar from './components/NavBar/NavBar'
import Footer from "./components/Footer/Footer"
import Inicio from './components/Inicio/Inicio'
import CategoryListCards from './components/Cards/CategoryListCards'
import NuevosListCards from './components/Cards/NuevosListCards'
import DetallesCards from './components/Cards/DetallesCards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/categoria/:categoria' element={<CategoryListCards/>}/>
          <Route path='/nuevosIngresos' element={<NuevosListCards/>}/>
          <Route path='/detallesProducto/:id' element={<DetallesCards/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
