import React, { useState } from 'react'
import "./User.css"
import DadosUser from '../components/DadosUser'
import ServicosUser from '../components/ServicosUser'
import ContatoUser from '../components/ContatoUser'
import AvaliacoesUser from '../components/AvaliacoesUser'
import SobreUser from '../components/SobreUser'
import Header from '../components/Header'

function User() {

    const [componente, setComponente] = useState(null)

  return (
    <div className='container-user'>

        <Header/>

        <div className="main-user">

            <div className="main-user-left">

                <div className="main-user-left-top">

                    <div className="main-user-left-image"></div>
                    <label htmlFor="" className='main-user-left-name'>Nome usuário</label>

                </div>

                <div className="main-user-left-bottom">
                    <button className="botao-menu" onClick={() => setComponente('dados')}>Meus Dados</button>
                    <button className="botao-menu" onClick={() => setComponente('servicos')}>Serviços</button>
                    {/* <button className="botao-menu" onClick={() => setComponente('contato')}>Contato</button> */}
                    <button className="botao-menu" onClick={() => setComponente('avaliacoes')}>Avaliações</button>
                    <button className="botao-menu" onClick={() => setComponente('historico')}>Histórico</button>
                </div>

            </div>


            <div className="main-user-right">

                {componente === 'dados' && <DadosUser />}
                {componente === 'servicos' && <ServicosUser />}
                {componente === 'contato' && <ContatoUser />}
                {componente === 'avaliacoes' && <AvaliacoesUser />}
                {componente === 'historico' && <SobreUser />}

            </div>

        </div>

        <div className="footer">

        </div>
      
    </div>
  )
}

export default User
