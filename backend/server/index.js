//index.js
const server = require('./server');
require('dotenv').config();

const port = process.env.PORT;

const express = require('express');
const app = express();
app.use(express.json());

//ACESSAR A ROTA E USAR A FUNÇÃO IMPORTADA PARA INSERIR DADOS NA TABELA
// app.post("/clientes", async (req, res) => {
    
//     await server.createCustomer(req.body);

//     res.sendStatus(201);
//     console.log("Dados inseridos com sucesso!")

// })

app.listen(port);
console.log('Backend rodando na porta', port)
