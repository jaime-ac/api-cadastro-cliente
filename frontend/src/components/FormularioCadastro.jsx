import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./FormularioCadastro.css";
import axios from 'axios';
import { validarEmail, validarCPF, validarPassword } from '../functions/functions';

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senha, setSenha] = useState('');
    const [verSenha, setVerSenha] = useState(false);
    const [erroEmail, setErroEmail] = useState('');
    const [erroCPF, setErroCPF] = useState('');
    const [erroSenha, setErroSenha] = useState('');


    const navigate = useNavigate();

    const cadastrarCliente = async (e) => {
        e.preventDefault(); // impede o recarregamento da página

        setErroEmail('');
        setErroCPF('');
        setErroSenha('');

        if (!validarEmail(email)) {
            setErroEmail('E-mail inválido!')
            return;
        }else {
            setErroEmail('');
        }

        if (!validarCPF(cpf)) {
            setErroCPF('CPF inválido');
            return;
        }else {
            setErroCPF('');
        }

        if (!validarPassword(senha)) {
            setErroSenha('A senha deve ter no mínimo 6 caracteres');
            return;
        }else {
            setErroSenha('');
        }

        const cliente = { 
            cpf,
            nome, 
            email, 
            endereco, 
            senha 
        };

        try {

            const response = await axios.post("http://localhost:3000/clientes", cliente, {

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            });

            alert("Cadastro realizado com sucesso!");
            console.log("Usuário Cadastrado", response.data);

            // limpa os campos
            setNome('');
            setEmail('');
            setCpf('');
            setEndereco('');
            setSenha('');

            navigate('/user');

        } catch (error) {

            console.error("Erro no cadastro do usuário", error);

            // Mostra mais detalhes do erro
            if (error.response) {
                console.log("Erro do servidor:", error.response.data);
                alert(`Erro: ${error.response.data.error || 'Erro no servidor'}`);
            } else if (error.request) {
                console.log("Erro de rede:", error.request);
                alert("Erro de conexão. Verifique se o backend está rodando.");
            } else {
                alert("Erro ao cadastrar o usuário, tente novamente!");
            }

        }

    };

  return (
    <div className='container-cadastro'>

        <form action="" onSubmit={cadastrarCliente} className='form-cadastro'>

            <label htmlFor="" className="form-title">Cadastre-se</label>

            <input 
                type="text" 
                className="form-inputs" 
                placeholder='Nome completo'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            
            <input 
                type="email" 
                className="form-inputs" 
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {erroEmail && <p className='mensagem-erro'>{erroEmail}</p>}

            <input 
                type="text" 
                className="form-inputs" 
                placeholder='CPF (sem pontos e hífen)'
                maxLength={11}
                value={cpf}
                onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))} //o .replace(/\D/g, '') garante que só seja digitado números; 
            />
            {erroCPF && <p className='mensagem-erro'>{erroCPF}</p>}

            <input 
                type="text" 
                className="form-inputs" 
                placeholder='Endereço'
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
            />

            <div className="parte-senha-cadastro">

                <input 
                    className="form-input-senha" 
                    placeholder='Senha'
                    type={verSenha ? "text" : "password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="button" className="botao-visualizar-senha" onClick={() => setVerSenha((visivel) => !visivel)}>{verSenha ? "🙈" : "👁️‍🗨️" }</button>

            </div>
            {erroSenha && <p className='mensagem-erro'>{erroSenha}</p>}

            <button className="form-button-cadastro">Cadastrar</button>

        </form>
      
    </div>
  )
}

export default FormularioCadastro
