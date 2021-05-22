import { Knex } from 'knex';
import { resetIndex } from '../utils/reset-index';

const companyTable = 'companies';

export async function up(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable(companyTable);
  if(!hasTable) {
    return knex.schema.createTable(companyTable, (tableBuilder) => {
      tableBuilder.bigIncrements('id');
      tableBuilder.string('name', 80);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable(companyTable);
  if(hasTable) {
    resetIndex(knex, companyTable);
    return knex.schema.dropTable(companyTable);
  }
}

