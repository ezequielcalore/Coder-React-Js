import React from 'react'

const Item = ({elemento}) => {
  return (
    <div>
        <img src={elemento.tapa} alt="tapa" width={"300px"} height={"300px"} />
        <h3>
            {elemento.titulo}
        </h3>
        <h4>
            {elemento.autor}
        </h4>
        <p>
            {elemento.precio}
        </p>
    </div>
  )
}

export default Item