import { Knex } from 'knex';
import {config} from 'dotenv';
import {resolve} from 'path';

config({
  path: './local.env'
});

export const development = {
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'data/development.db')
  },
  useNullAsDefault: true
} as Knex.Config<any>;

export const production = {
  client: 'mysql2',
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST||'localhost',
    database: process.env.DB_NAME||'application',
    password: process.env.DB_PASSWORD||'',
    user: process.env.DB_USERNAME||'root',
    port: parseInt(process.env.DB_PORT|| '3306')
  }
} as Knex.Config<any>;
