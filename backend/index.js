//index.js

require('dotenv').config();
const port = process.env.PORT;

const server = require('./server')
const express = require('express');
const cors = require('cors')
const functions = require('./functions/functions');

const app = express();

// Configurar CORS ANTES das outras middlewares
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Permite requisições do frontend
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Middleware para log das requisições (DEBUG)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next();
});

//ACESSAR A ROTA E USAR A FUNÇÃO IMPORTADA PARA INSERIR DADOS NA TABELA
app.post("/clientes", async (req, res) => {

    try {
        
        await server.createCustomer(req.body);
    
        const { cpf } = req.body;
    
        res.status(201).json({ 
            message: "Cliente cadastrado com sucesso!",
            cpfCadastrado: cpf
        });

    } catch (error) {
        
        console.error("Erro ao cadastrar:", error);
        res.status(500).json({ error: "Erro ao cadastrar." });

    }
    
});

app.listen(port);
console.log('Backend rodando na porta', port)
