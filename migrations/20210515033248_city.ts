import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable('cities');
  if(!hasTable) {
    return knex.schema.createTable('cities', (tableBuilder) => {
      tableBuilder.bigIncrements('id');
      tableBuilder.string('name', 80);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable('cities');
  if(hasTable) {
    return knex.schema.dropTable('cities');
  }
}

