import { Knex } from 'knex';
import { Customer, CustomerDTO, CustomerRepository } from 'portfolio-domain';
import {CustomerRepositoryKNEX} from '../../src/repository/customer-repository';
import { createConnection } from '../connection/connection';

describe('#CustomerRepository', () => {
  let customerRepository: CustomerRepository;
  let con: Knex<CustomerDTO, Customer[]>;
  beforeEach(async () => {
    con = await createConnection();
    customerRepository = CustomerRepositoryKNEX(con);
  });
  afterEach(async () => {
    con.destroy();
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
