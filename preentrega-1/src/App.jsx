import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  const [valor, setValor] = useState(0)
  
  return(

  <>
    <NavBar valor={valor}/>

    {/* <div>
      <Button text="botón" color="red"/>
    </div> */}

    <div>
      <ItemListContainer mensaje="¡Bienvenido!" funcion={setValor}/>
    </div>
    </>
  )
}

export default App
