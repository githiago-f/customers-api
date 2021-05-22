import { Knex } from 'knex';

export const resetIndex = async (knex: Knex<any, unknown[]>, tableName: string) => {
  const name = knex.client.config.client;
  if(name.match(/sqlite/gi) === null) {
    await knex.raw(`ALTER TABLE ${tableName} AUTO_INCREMENT=1`);
  } else {
    await knex.raw(`UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='${tableName}'`);
  }
};
