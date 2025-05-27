import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='container-navbar'>
        <Link to="/">Inínio</Link>
        <Link to="/service">Serviços</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre Nós</Link>
    </nav>
  )
}

export default Navbar
