import { useState } from "react"
const Button = ({text, color, funcion}) => {

    const [count, setCount] = useState(0)

    const click = () => {
        setCount(count + 1)
        funcion(count)
    }
    return(
        <button style={{backgroundColor: color}} onClick={() => click()}> {text} </button>
    )
}

export default Button