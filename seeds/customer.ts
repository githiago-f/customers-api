import { Knex } from 'knex';
import { Customer } from 'portfolio-domain';

export async function seed(knex: Knex): Promise<void> {
  const randomName = () => (Math.random() * 400 + Date.now()).toString(32)
    .replace('.', '');

  // Deletes ALL existing entries
  await knex('customers').del();

  // Inserts seed entries
  await knex('customers').insert([
    Customer({
      first_name: 'Isis',
      last_name: 'Daici',
      city: 1,
      company: 1,
      email: 'isis.daici@github.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Ben',
      last_name: 'Coen',
      city: 2,
      company: 2,
      email: 'ben.coen@acmexpto.com',
      gender: 'male',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: 'jane.doe@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'John',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: 'john.doe@gmail.com',
      gender: 'male',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    }),
    Customer({
      first_name: 'Jane',
      last_name: 'Doe',
      city: 1,
      company: 3,
      email: randomName()+'@gmail.com',
      gender: 'female',
      titulation: 'Desenvolvedor(a) JR'
    })
  ]);
}
