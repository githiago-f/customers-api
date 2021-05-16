import { Knex } from 'knex';
import { Customer, CustomerDTO, CustomerRepository } from 'portfolio-domain';
import {CustomerRepositoryKNEX} from '../../src/repository/customer-repository';
import { testConnection } from '../connection/connection';

describe('#CustomerRepository', () => {
  let customerRepository: CustomerRepository;
  let conn: Knex<CustomerDTO, Customer[]>;
  beforeEach(async () => {
    conn = testConnection();
    customerRepository = CustomerRepositoryKNEX(conn);
    await conn.migrate.latest();
  });
  afterEach(async () => {
    conn.destroy();
  });

  describe('.create', () => {
    it('fails', () => {
      fail('todo');
    });
  });
  describe('.findAllPaged', () => {
    it('fails', () => {
      fail('todo');
    });
  });
  describe('.findByCityPaged', () => {
    it('fails', () => {
      fail('todo');
    });
  });
  describe('.findById', () => {
    it('fails', () => {
      fail('todo');
    });
  });
  describe('.totalByCity', () => {
    it('fails', () => {
      fail('todo');
    });
  });
});
