import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({elemento}) => {
  return (
    <div>
        <img src={elemento.tapa} display="block" alt="tapa" width={"300px"} height={"300px"} />
        <h3>
            {elemento.titulo}
        </h3>
        <h4>
            {elemento.autor}
        </h4>
        <button> 
          <Link to={`/products/${elemento.id}`}> Más detalles </Link>
        </button>
    </div>
  )
}

export default Item