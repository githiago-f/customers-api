import { knex } from 'knex';
import {resolve} from 'path';

export const testConnection = () => knex({
  client: 'sqlite3',
  connection: ':memory:',
  debug: false,
  pool: {
    min: 1,
    max: 1,
    idleTimeoutMillis: 360000*1000,
    destroyTimeoutMillis: 360000*1000
  },
  migrations: {
    directory: resolve(__dirname, '../../migrations')
  },
  log: {},
  useNullAsDefault: true
});
