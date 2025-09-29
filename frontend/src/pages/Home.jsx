import "./Home.css"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FormularioCadastro from "../components/FormularioCadastro"
import FormularioLogin from "../components/FormularioLogin";
import Header from "../components/Header";


function Home() {
  const [cadastro, setCadastro] = useState(false);
  const [login, setLogin] = useState(false);
  const [formulario, setFormulario] = useState(null);

  return (
    <div className='container-home'>

      <Header/>

      <div className="navbar-home">
        <Navbar />
      </div>

      <div className="main-home">

          <div className="main-left">
            <label htmlFor="" className="main-left-text">"Aqui, cada detalhe </label>
            <label htmlFor="" className="main-left-text">respeita a sua essência."</label>
          </div>

          <div className="main-right">

            <div className="main-right-forms">
              { formulario === 'Cadastro' && <FormularioCadastro />}
              { formulario === 'Login' && <FormularioLogin />}
            </div>
            
            <div className="main-right-buttons">
              <button className="main-right-button" onClick={() => setFormulario('Cadastro')}>Cadastrar</button>
              <button className="main-right-button" onClick={() => setFormulario('Login')}>Login</button>
            </div>

          </div>

      </div>

      <div className="footer">

      </div>
        
    </div>
  )
}

export default Home
