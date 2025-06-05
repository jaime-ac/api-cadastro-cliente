//server.js
const { Pool } = require('pg');
require('dotenv').config();

async function connect() {

    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });

    const client = await pool.connect();
    console.log('O Pool de conexão foi criado!')
    console.log(process.env.DB_PASSWORD)
    client.release();
    
};

connect();

//CREATE/INSERT CLIENT
async function createCustomer(customer) {

    const client = await connect(); 

    sql = 'INSERT INTO clientes (nome, email, cpf, endereco, senha) VALUES ($1, $2, $3, $4, $5)';
    values = [customer.nome, customer.email, customer.cpf, customer.endereco, customer.senha];

    await client.query(sql, values);
    
}

module.exports = {
    createCustomer
};
