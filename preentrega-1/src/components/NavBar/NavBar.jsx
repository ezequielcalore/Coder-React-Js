import {Link} from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
    <nav>
    <button>
      <Link to={'/'}>
        <AiFillHome />
      </Link>
    </button>
    <button>
      <Link to={'/products'}> Products </Link>
    </button>
    <button>
      <Link to={'/contact'}> Contact </Link>
    </button>
    </nav>
   </>
  )
}

export default NavBar