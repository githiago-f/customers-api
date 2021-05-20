import { knex, Knex } from 'knex';

export type DBConnection = Knex<any, unknown[]>;

export const prodConnection = () => knex({
  client: 'mysql2',
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST||'db',
    database: process.env.DB_NAME||'application',
    password: process.env.DB_PASSWORD||'',
    user: process.env.DB_USERNAME||'root',
    port: parseInt(process.env.DB_PORT|| '3306')
  }
});
