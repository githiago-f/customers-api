import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable('customers');
  if(!hasTable) {
    return knex.schema.createTable('customers', (tableBuilder) => {
      tableBuilder.bigIncrements('id');
      tableBuilder.string('first_name', 80).notNullable();
      tableBuilder.string('last_name', 80).notNullable();
      tableBuilder.string('email', 320).notNullable().unique();
      tableBuilder.bigInteger('company_id')
        .notNullable()
        .references('id')
        .inTable('companies');
      tableBuilder.bigInteger('city_id')
        .notNullable()
        .references('id')
        .inTable('cities');
      tableBuilder.string('title', 320);
      tableBuilder.enu('gender', ['female', 'male', 'uninformed']);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasTable =  await knex.schema.hasTable('customers');
  if(hasTable) {
    return knex.schema.dropTable('customers');
  }
}

