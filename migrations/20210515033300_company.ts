import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable('companies');
  if(!hasTable) {
    return knex.schema.createTable('companies', (tableBuilder) => {
      tableBuilder.bigIncrements('id');
      tableBuilder.string('name', 80);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable('companies');
  if(hasTable) {
    return knex.schema.dropTable('companies');
  }
}

