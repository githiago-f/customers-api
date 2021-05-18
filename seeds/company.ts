import { Knex } from 'knex';
import { Company } from 'portfolio-domain';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('companies').del();

  // Inserts seed entries
  await knex('companies').insert([
    Company({ name: 'GitHub' }),
    Company({ name: 'ACME Xpto' }),
    Company({ name: 'ACME ltda.' })
  ]);
}
