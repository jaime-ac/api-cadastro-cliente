import React from 'react'
import "./Sobre.css"
import Navbar from '../components/Navbar'

function Sobre() {
  return (
    <div className='container-sobre'>

      <div className="header-sobre">

        <div className="header-logo-sobre">

          <label htmlFor="" className="nome-empresa">Black Hair</label>

        </div>

        <div className="header-social-midia-sobre">

          <buuton className="header-midia-button-sobre"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images-sobre"/></buuton>
          <buuton className="header-midia-button-sobre"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images-sobre"/></buuton>
          <buuton className="header-midia-button-sobre"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images-sobre"/></buuton>
          <buuton className="header-midia-button-sobre"><img src="./public/icons/icon-x.svg" alt="" className="midia-images-sobre"/></buuton>
          
        </div>

      </div>

      <div className="navbar-sobre">
        <Navbar />
      </div>

      <div className="main-sobre">

      </div>

      <div className="footer-sobre">

      </div>
    </div>
  )
}

export default Sobre
