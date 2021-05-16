import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('cities').del();

  // Inserts seed entries
  await knex('cities').insert([
    {name: 'Esteio,RS'},
    {name: 'Porto Alegre,RS'},
    {name: 'São Paulo,SP'}
  ]);
}
