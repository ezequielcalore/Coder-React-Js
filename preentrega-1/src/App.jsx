import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomeContainer from './components/HomeContainer/HomeContainer'
import Item from './components/ItemListContainer/Item'
import ContactContainer from './components/ContactContainer/ContactContainer'
import ItemDetail from './components/ItemListContainer/ItemDetail'


function App() {

  const [valor, setValor] = useState(0)
  
  return(

  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomeContainer/>} />
        <Route exact path='/products' element={<ItemListContainer/>}/>
        <Route exact path='/contact' element={<ContactContainer/>}/>
        <Route exact path='/products/:id' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
