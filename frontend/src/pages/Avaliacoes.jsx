import React, { useState } from 'react'
import "./Avaliacoes.css"
import Navbar from '../components/Navbar'
import BoxAvaliacoes from '../components/BoxAvaliacoes'
import Header from '../components/Header';

function Avaliacoes() {
  const [abrirForm, setAbrirForm] = useState(false);
  return (
    <div className='container-avaliacoes'>

      <Header/>
      
      <div className="navbar-avaliacoes">
        <Navbar />
      </div>

      <div className="main-avaliacoes">

        <div className="main-avaliacoes-left">

          <div className="main-avaliacoes-left-title">
            <label htmlFor="" className="avaliacoes-title">Avaliações</label>
            <button className="avaliacoes-title-button" onClick={() => setAbrirForm(true)}><img src="./public/icons/botao-avaliacoes.svg" alt="" className='img-avaliacoes-button'/></button>
          </div>

          <div className="main-avaliacoes-left-box">
            <div className="box-avaliacoes-container">
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

      <dialog open={abrirForm}>
        <div className="container-form-dialog">

          <div className="parte-fechar-dialog">
            <button className="fechar-form-dialog" onClick={() => setAbrirForm(false)}>❌</button>
          </div>

          <div className="parte-identificacao-dialog">

            <div className="parte-foto-usuario">
              <div className="foto-usuario"></div>
            </div>
            <div className="parte-nome-usuario">
              <label htmlFor="" className="nome-usuario">Nome Usuário</label>
            </div>

          </div>

          <div className="parte-mensagem-dialog">
            <textarea className="parte-mensagem" placeholder='Deixe sua avaliação aqui...'/>
          </div>

          <div className="parte-enviar-dialog">
            <button className="botao-enviar-mensagem">Enviar</button>
          </div>


        </div>
      </dialog>

    </div>
  )
}

export default Avaliacoes
