import env from 'dotenv';
const Pool = require('pg').Pool;

env.config();

const pool = new Pool({
   host: process.env.DB_HOST || 'localhost',
   database: process.env.DB_NAME || 'quotes',
   password: process.env.DB_PASSWORD,
   user: process.env.DB_USERNAME,
   port: process.env.DB_PORT,
});

export { pool };
