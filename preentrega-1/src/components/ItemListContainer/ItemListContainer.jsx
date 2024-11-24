import React, { useEffect } from 'react'
import Button from '../button/button'
import ItemList from './ItemList'
import { useState } from "react"
import { getProducts, getProductsByDecada } from '../../data/backend_falso'


const ItemListContainer = ({funcion}) => {

  const [products, setProducts] = useState([])
  const [decada, setDecada] = useState("")
  const [cargando, setCargando] = useState(false)

  useEffect(() => {

    setCargando(true)
    if (decada) {

      getProductsByDecada(decada)
      .then(res => setProducts(res))
      .catch(rej => console.error(rej))
      .finally(() => setCargando(false))

    } else {

      getProducts()
      .then(res => setProducts(res))
      .catch(rej => console.error(rej))
      .finally(() => setCargando(false))}
  
  }, [decada])
  

  const changeDecada = (ano) => {
    setDecada(ano)
  }
  
  return (
    <>

    <div>
      <div>
        <Button funcion={() => changeDecada(1970)} text="1970-1980"/> 
        <Button funcion={() => changeDecada(1980)} text="1980-1990"/> 
        <Button funcion={() => changeDecada(1990)} text="1990-2000"/> 
        <Button funcion={() => changeDecada(2000)} text="2000-2010"/> 
        <Button funcion={() => changeDecada(2010)} text="2010-2020"/> 
        <Button funcion={() => changeDecada("")} text="Todos"/> 
      </div>

      {
      cargando
      ?
      <h2> Cargando...</h2>
      :  
      <ItemList products={products}/>
      }   

    </div>
    </>
  )
}

export default ItemListContainer