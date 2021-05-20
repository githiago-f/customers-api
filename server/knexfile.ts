import {config} from 'dotenv';

config({
  path: './local.env'
});

module.exports = {
  production: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST||'localhost',
      database: process.env.DB_NAME||'application',
      password: process.env.DB_PASSWORD||'',
      user: process.env.DB_USERNAME||'root',
      port: parseInt(process.env.DB_PORT|| '3306')
    }
  }
};
