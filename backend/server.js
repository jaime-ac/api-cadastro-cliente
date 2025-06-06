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
    client.release();
    
};

connect();



