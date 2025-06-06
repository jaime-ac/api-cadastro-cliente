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
    
    await functions.createCustomer(req.body);

    res.sendStatus(201);
    console.log("Dados inseridos com sucesso!")

})

app.listen(port);
console.log('Backend rodando na porta', port)
