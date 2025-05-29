import React from 'react'
import "./Contato.css"
import Navbar from '../components/Navbar'

function Contato() {
  return (
    <div className='container-contato'>

      <div className="header-contato">

        <div className="header-logo-contato">

          <label htmlFor="" className="nome-empresa">Black Hair</label>

        </div>

        <div className="header-social-midia-contato">

          <buuton className="header-midia-button-contato"><img src="./public/icons/icon-facebook.svg" alt="" className="midia-images-contato"/></buuton>
          <buuton className="header-midia-button-contato"><img src="./public/icons/icon-instagram.svg" alt="" className="midia-images-contato"/></buuton>
          <buuton className="header-midia-button-contato"><img src="./public/icons/icon-tiktok.svg" alt="" className="midia-images-contato"/></buuton>
          <buuton className="header-midia-button-contato"><img src="./public/icons/icon-x.svg" alt="" className="midia-images-contato"/></buuton>
          
        </div>

      </div>

      <div className="navbar-contato">
        <Navbar />
      </div>

      <div className="main-contato">

        <div className="main-contato-left"><img src="./public/images/imagem-contato.png" alt="" className='imagem-contato'/></div>

        <div className="main-contato-right">

          <form action="">
            <h1>Contate-nos</h1>
            <input type="text" name="" id="" className='form-input' placeholder='Nome'/>
            <input type="email" name="" id="" className='form-input' placeholder='E-mail'/>
            <input type="text" name="" id="" className='form-input' placeholder='Serviço'/>
            <textarea name="" id="" className='form-texterea' placeholder='Descreva o assunto aqui...'></textarea>
            <button className="form-button">Enviar</button>
          </form>

        </div>

      </div>

      <div className="footer-contato">

      </div>
      
    </div>
  )
}

export default Contato
