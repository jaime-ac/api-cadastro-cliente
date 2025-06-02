import React, { useState } from 'react'
import "./FormularioLogin.css"

function FormularioLogin() {
    const [cpfLogin, setCpfLogin] = useState();
    const [senhaLogin, setSenhaLogin] = useState();

  return (
    <div className='container-login'>

        <form action="" className='form-login'>

            <label htmlFor="" className="form-title">Login</label>

            <input type="text" className="form-inputs" placeholder='CPF'
                value={cpfLogin}
                onChange={setCpfLogin}
            />

            <input type="password" className="form-inputs" placeholder='Senha'
                value={senhaLogin}
                onChange={setSenhaLogin}
            />      

            <button className="form-button-cadastro">Login</button>

        </form>
      
    </div>
  )
}

export default FormularioLogin
