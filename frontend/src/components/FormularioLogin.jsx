import React, { useState } from 'react'
import "./FormularioLogin.css"

function FormularioLogin() {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [cpfLogin, setCpfLogin] = useState();
    const [senhaLogin, setSenhaLogin] = useState();

  return (
    <div className='container-login'>

        <form action="" className='form-login'>

            <label htmlFor="" className="form-title">Login</label>

            <input type="text" className="form-inputs" placeholder='CPF'
                value={cpfLogin}
                onChange={(e) => setCpfLogin(e.target.value)}
            />

            <div className="parte-senha-cadastro">

                <input className="form-input-senha" placeholder='Senha'
                    type={senhaVisivel ? "text" : "password"}
                    value={senhaLogin}
                    onChange={(e) => setSenhaLogin(e.target.value)}
                />
                <button className="botao-visualizar-senha" 
                    type='button'
                    onClick={() => setSenhaVisivel((visivel) => !visivel)}
                >
                    {senhaVisivel ? "🙈" : "👁️‍🗨️" }
                </button>

            </div>   

            <button className="form-button-cadastro" >Login</button>

        </form>
      
    </div>
  )
}

export default FormularioLogin
