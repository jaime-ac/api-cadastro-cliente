import React, { useState } from 'react'
import "./FormularioCadastro.css"

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senha, setSenha] = useState('');

  return (
    <div className='container-cadastro'>

        <form action="" className='form-cadastro'>

            <label htmlFor="" className="form-title">Cadastre-se</label>

            <input type="text" className="form-inputs" placeholder='Nome completo'
                value={nome}
                onChange={setNome}
            />

            <input type="email" className="form-inputs" placeholder='E-mail'
                value={email}
                onChange={setEmail}
            />

            <input type="text" className="form-inputs" placeholder='CPF'
                value={cpf}
                onChange={setCpf}
            />

            <input type="text" className="form-inputs" placeholder='Endereço'
                value={endereco}
                onChange={setEndereco}
            />

            <input type="password" className="form-inputs" placeholder='Senha'
                value={senha}
                onChange={setSenha}
            />

            <button className="form-button-cadastro">Cadastrar</button>

        </form>
      
    </div>
  )
}

export default FormularioCadastro
