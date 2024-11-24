import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductbyID } from '../../data/backend_falso'

const ItemDetail = () => {

    const {id}=useParams()
    const [product, setProduct] = useState({})
    
    useEffect(() => {setProduct(getProductbyID(id))}, [])

    return (
    <>
     <img src={product.tapa} alt="tapa" width={"300px"} height={"300px"} />
     <h1> {product.titulo} </h1>
     <h2> {product.autor} </h2>
     <h3> año {product.ano}</h3>
     <h3> precio: ${product.precio}</h3>
    </>
      )
}


export default ItemDetail