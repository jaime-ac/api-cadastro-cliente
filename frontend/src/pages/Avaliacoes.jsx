import React from 'react'
import "./Avaliacoes.css"
import Navbar from '../components/Navbar'

function Avaliacoes() {
  return (
    <div className='container-avaliacoes'>

      <div className="header-avaliacoes">

        <div className="header-logo-avaliacoes">

          <label htmlFor="" className="nome-empresa">Black Hair</label>

        </div>

        <div className="header-social-midia-avaliacoes">

          <buuton className="header-midia-button-avaliacoes"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images-avaliacoes"/></buuton>
          <buuton className="header-midia-button-avaliacoes"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images-avaliacoes"/></buuton>
          <buuton className="header-midia-button-avaliacoes"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images-avaliacoes"/></buuton>
          <buuton className="header-midia-button-avaliacoes"><img src="./public/icons/icon-x.svg" alt="" className="midia-images-avaliacoes"/></buuton>
          
          
        </div>

      </div>

      <div className="navbar-avaliacoes">
        <Navbar />
      </div>

      <div className="main-avaliacoes">

      </div>

      <div className="footer-avaliacoes">

      </div>

    </div>
  )
}

export default Avaliacoes
