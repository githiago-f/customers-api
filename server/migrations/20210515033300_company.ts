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
    await knex.raw('ALTER TABLE companies AUTO_INCREMENT=1');
    return knex.schema.dropTable('companies');
  }
}

