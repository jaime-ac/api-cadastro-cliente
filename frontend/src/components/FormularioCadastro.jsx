import React, { useState } from 'react';
import "./FormularioCadastro.css";
import axios from 'axios';

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senha, setSenha] = useState('');
    const [verSenha, setVerSenha] = useState(false);

    const cadastrarCliente = async (e) => {
        e.preventDefault(); // impede o recarregamento da página

        const cliente = { cpf, nome, email, endereco, senha };

        try {

            const response = await axios.post("http://localhost:3000/clientes", cliente);

            alert("Cadastro realizado com sucesso!");

            // limpa os campos
            setNome('');
            setEmail('');
            setCpf('');
            setEndereco('');
            setSenha('');

        } catch (error) {

            console.error("Erro no cadastro do usuário", error);
            alert("Erro ao cadastrar o usuário, tente novamente!");

        }

    };

  return (
    <div className='container-cadastro'>

        <form action="" onSubmit={cadastrarCliente} className='form-cadastro'>

            <label htmlFor="" className="form-title">Cadastre-se</label>

            <input type="text" className="form-inputs" placeholder='Nome completo'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input type="email" className="form-inputs" placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input type="text" className="form-inputs" placeholder='CPF (sem pontos e hífen)'
                maxLength={11}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />

            <input type="text" className="form-inputs" placeholder='Endereço'
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
            />

            <div className="parte-senha-cadastro">

                <input className="form-input-senha" placeholder='Senha'
                    type={verSenha ? "text" : "password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="button" className="botao-visualizar-senha" onClick={() => setVerSenha((visivel) => !visivel)}>{verSenha ? "🙈" : "👁️‍🗨️" }</button>

            </div>

            <button className="form-button-cadastro">Cadastrar</button>

        </form>
      
    </div>
  )
}

export default FormularioCadastro
