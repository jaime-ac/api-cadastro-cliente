import React, { useState } from 'react'
import "./FormularioLogin.css"
import { validarCPF, validarPassword } from '../functions/functions';
import { useNavigate } from 'react-router-dom';

function FormularioLogin() {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [cpfLogin, setCpfLogin] = useState();
    const [senhaLogin, setSenhaLogin] = useState();
    const [erroCpf, setErroCpf] = useState();
    const [erroSenha, setErroSenha] = useState();
    
    const navigate = useNavigate();

    const fazerLogin = async (e) => {
        e.preventDefault(); // impede o recarregamento da página

        setErroCpf('');
        setErroSenha('');
        
        if (!validarCPF(cpf)) {
            setErroCpf('CPF inválido');
            return;
        }else {
            setErroCpf('');
        }
        
        if (!validarPassword(senha)) {
            setErroSenha('A senha deve ter no mínimo 6 caracteres');
            return;
        }else {
            setErroSenha('');
        }


    }

  return (
    <div className='container-login'>

        <form action="" className='form-login' onSubmit={fazerLogin}>

            <label htmlFor="" className="form-title">Login</label>

            <input type="text" className="form-inputs" placeholder='CPF'
                maxLength={11}
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
