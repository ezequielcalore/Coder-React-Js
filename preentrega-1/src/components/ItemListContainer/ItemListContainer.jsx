import React from 'react'
import Button from '../button/button'

const ItemListContainer = ({mensaje, funcion}) => {
  return (
    <>
    <div> {mensaje} </div>
    <Button funcion={funcion} text="Agregar al carrito"/>
    </>
  )
}

export default ItemListContainer