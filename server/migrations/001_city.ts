import { Knex } from 'knex';
import { resetIndex } from '../utils/reset-index';

const cityTable = 'cities';

export async function up(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable(cityTable);
  if(!hasTable) {
    return knex.schema.createTable(cityTable, (tableBuilder) => {
      tableBuilder.bigIncrements('id');
      tableBuilder.string('name', 80);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable(cityTable);
  if(hasTable) {
    resetIndex(knex, cityTable);
    return knex.schema.dropTable(cityTable);
  }
}

