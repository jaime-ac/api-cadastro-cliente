//server.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

async function connect() {
    return pool; //retorna o pool de conexão
    console.log('O Pool de conexão foi criado!')
};


// async function connect() {
    
//     const pool = new Pool({
//         user: process.env.DB_USER,
//         host: process.env.DB_HOST,
//         database: process.env.DB_DATABASE,
//         password: process.env.DB_PASSWORD,
//         port: process.env.DB_PORT
//     });

//     console.log('O Pool de conexão foi criado!')
//     const client = await pool.connect();
//     client.release();
// };

// connect();

//cadastro do cliente no banco de dados
async function createCustomer(customer) {
    // console.log("customer =====>>>> ", customer)
    
    try {

      const client = await connect(); 
      const { cpf, nome, email, endereco, senha } = customer;
  
      const sql = 'INSERT INTO clientes (cpf, nome, email, endereco, senha) VALUES ($1, $2, $3, $4, $5)';
      const values = [cpf, nome, email, endereco, senha];
      // const values = [customer.cpf, customer.nome, customer.email, customer.endereco, customer.senha];
  
      await client.query(sql, values);


    } catch (error) {

      console.error("Erro ao cadastrar cliente:", error);
      throw error; // ou envie uma resposta com erro

    }
}

module.exports = {
    createCustomer
};