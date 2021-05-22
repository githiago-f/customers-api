import { knex, Knex } from 'knex';
import {resolve} from 'path';

export type DBConnection = Knex<any, unknown[]>;

export const devConnection = () => knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, '../../data/development.db')
  },
  useNullAsDefault: true
});

export const prodConnection = () => knex({
  client: 'mysql2',
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST||'localhost',
    database: process.env.DB_NAME||'application',
    password: process.env.DB_PASSWORD||'',
    user: process.env.DB_USERNAME||'root',
    port: parseInt(process.env.DB_PORT|| '3306')
  }
});
