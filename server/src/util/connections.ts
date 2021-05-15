import { knex, Knex } from 'knex';
import {resolve} from 'path';

export type DBConnection = () => Knex<any, unknown[]>;

export const prodConnection = () => knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST||'localhost',
    database: process.env.DB_NAME||'application',
    password: process.env.DB_PASSWORD||'',
    user: process.env.DB_USERNAME||'root'
  }
});

export const devConnection = () => knex({
  client: 'sqlite3',
  debug: true,
  connection: {
    filename: resolve(__dirname, '../../data/dev.sqlite3')
  },
  useNullAsDefault: true
});

export const testConnection = () => knex({
  client: 'sqlite3',
  connection: ':memory:',
  pool: {
    min: 1,
    max: 1,
    idleTimeoutMillis: 360000*1000,
    destroyTimeoutMillis: 360000*1000
  },
  useNullAsDefault: true
});
