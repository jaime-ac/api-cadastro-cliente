//index.js

require('dotenv').config();
const port = process.env.PORT;

const server = require('./server')
const express = require('express');
const functions = require('./functions/functions');

const app = express();
app.use(express.json());

//ACESSAR A ROTA E USAR A FUNÇÃO IMPORTADA PARA INSERIR DADOS NA TABELA
app.post("/clientes", async (req, res) => {
    // console.log("req.body =======>>>> ", req.body)

    try {
        
        await server.createCustomer(req.body);
    
        const { cpf } = req.body;
    
        console.log("Dados inseridos com sucesso!")
        res.sendStatus(201).json({ 
            message: "Cliente cadastrado com sucesso!",
            cpfCadastrado: cpf
        });

    } catch (error) {
        
        console.error("Erro ao cadastrar cliente:", error);
        res.status(500).json({ error: "Erro ao cadastrar cliente." });

    }
    
})

app.listen(port);
console.log('Backend rodando na porta', port)
