import React from 'react'
import "./Avaliacoes.css"
import Navbar from '../components/Navbar'
import BoxAvaliacoes from '../components/BoxAvaliacoes'

function Avaliacoes() {
  return (
    <div className='container-avaliacoes'>

      <div className="header">

        <div className="header-logo">

          <label htmlFor="" className="nome-empresa">Black Hair</label>

        </div>

        <div className="header-social-midia">

          <buuton className="header-midia-button"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images"/></buuton>
          <buuton className="header-midia-button"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images"/></buuton>
          <buuton className="header-midia-button"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images"/></buuton>
          <buuton className="header-midia-button"><img src="./public/icons/icon-x.svg" alt="" className="midia-images"/></buuton>
          
          
        </div>

      </div>

      <div className="navbar-avaliacoes">
        <Navbar />
      </div>

      <div className="main-avaliacoes">

        <div className="main-avaliacoes-left">
          <div className="main-avaliacoes-left-title">
            <label htmlFor="" className="avaliacoes-title">Avaliações</label>
          </div>

          <div className="main-avaliacoes-left-box">
            <div className="box-avaliacoes-container">
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
              <BoxAvaliacoes />
            </div>
          </div>
        </div>

        <div className="main-avaliacoes-right"></div>

      </div>

      <div className="footer">

      </div>

    </div>
  )
}

export default Avaliacoes
