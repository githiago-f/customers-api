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
    await con.destroy();
  });

  describe('.create', () => {
    describe('when given a valid customer', () => {
      describe('when the customer\'s email isn\'t unique', () => {
        const customer = Customer({
          email: 'isis.daici@github.com',
          first_name: 'Isis',
          last_name: 'Daici',
          gender: 'male',
          titulation: 'Titulation name',
          city: 1,
          company: 1
        });
        it('fails an throws an error', () => {
          expect.assertions(1);
          return customerRepository.create(customer).catch(e => {
            expect(e).toMatchObject({
              name: 'EntryConflict',
              message: 'Customer already exists.'
            });
          });
        });
      });
      describe('when the customer\'s email is unique', () => {
        const customer = Customer({
          email: 'isis.daici2@github.com',
          first_name: 'Isis',
          last_name: 'Daici',
          gender: 'male',
          titulation: 'Titulation name',
          city: 1,
          company: 1
        });
        it('creates a new valid user and returns its ID', async () => {
          const created = await customerRepository.create(customer);
          expect(created).toBe(13);
        });
      });
    });
  });
  describe('.findAllPaged', () => {
    it('returns the first 10 items in the table', async () => {
      const pageOne = await customerRepository.findAllPaged();
      expect(pageOne.length).toBe(10);
    });
  });
  describe('.findByCityPaged', () => {
    it('returns the first 10 items in the city', async () => {
      const pageOne = await customerRepository.findByCityPaged(1);
      expect(pageOne.length).toBe(10);
    });
    it('returns the last items in this database', async () => {
      const pageOne = await customerRepository.findByCityPaged(1, 2);
      expect(pageOne.length).toBe(1);
    });
  });
  describe('.findById', () => {
    describe('when customer was already created', () => {
      it('returns a valid customer', async () => {
        const customer = await customerRepository.findById(1);
        expect(customer.email).toBe('isis.daici@github.com');
        expect(customer.first_name).toBe('Isis');
      });
    });
    describe('when customer is not created', () => {
      it('returns null', async () => {
        const customer = await customerRepository.findById(1400);
        expect(customer).toBe(null);
      });
    });
  });
  describe('.totalByCity', () => {
    it('returns all cities that have at last one customer', async () => {
      const groupByCity = await customerRepository.totalByCity();
      expect(groupByCity.length).toBe(2);
      expect(groupByCity[0]).toMatchObject({
        city: 'Esteio,RS',
        customers_total: 11,
        city_id: 1
      });
    });
  });
  describe('.update', () => {
    describe('when customer has id and data to update', () => {
      it('should update customer\'s data', async () => {
        const customer = Customer({
          id: 1,
          first_name: 'Thiago',
          last_name: 'Dutra',
          email: 'isis.daici@github.com',
          city: 1,
          company: 1,
          gender: 'male'
        });
        const updated = await customerRepository.update(customer) as Customer;
        expect(updated.email).toBe('isis.daici@github.com');
        expect(updated.first_name).toBe('Thiago');
        expect(updated.gender).toBe('male')
      });
    });
  });
});
