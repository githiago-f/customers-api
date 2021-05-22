import { Knex } from 'knex';
import { resetIndex } from '../utils/reset-index';

const customerTable = 'customers';

export async function up(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable(customerTable);
  if(!hasTable) {
    return knex.schema.createTable('customers', (tableBuilder) => {
      tableBuilder.bigIncrements('id');
      tableBuilder.string('first_name', 80).notNullable();
      tableBuilder.string('last_name', 80).notNullable();
      tableBuilder.string('email', 320).notNullable().unique();
      tableBuilder.bigInteger('company')
        .notNullable()
        .references('id')
        .inTable('companies');
      tableBuilder.bigInteger('city')
        .notNullable()
        .references('id')
        .inTable('cities');
      tableBuilder.string('titulation', 320);
      tableBuilder.enu('gender', ['female', 'male', 'uninformed']);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable(customerTable);
  if(hasTable) {
    resetIndex(knex, customerTable);
    return knex.schema.dropTable(customerTable);
  }
}

