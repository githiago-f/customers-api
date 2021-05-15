import { CustomerRepository } from 'portfolio-domain';
import { DBConnection } from '../util/connections';
import { paged } from '../util/paged';
import { Exists } from './errors/exists';

/**
 * ### SOLID - L
 * @description Seguindo o principio de Liskov, onde as
 * implementações devem poder ser substituídas por suas
 * abstrações, decidi construir repositórios como interfaces
 * para permitir a mudança de repositórios apenas pela implementação.
 * @param connection {DBConnection}
 * @returns {CustomerRepository}
 */
export const CustomerRepositoryKNEX = (connection: DBConnection) => {
  const self = {} as CustomerRepository;
  const fields = [
    'customers.id',
    'customers.first_name',
    'customers.last_name',
    'customers.email',
    'customers.titulation'
  ];

  const customers = () => connection().table('customers');

  self.create = async (customer) => {
    const trx = await connection().transaction();
    try {
      const table = trx.table('customers');
      const [row] = await table
        .where('email', customer.email)
        .count({exists: 'id'});
      if(row.exists>0) {
        throw new Exists('Customer');
      }
      await table.insert(customer, '*');
      await trx.commit();
      return;
    } catch(e) {
      await trx.rollback();
      throw e;
    }
  };

  self.findAllPaged = async (page = 0) => {
    return await customers().select()
      .limit(10)
      .offset(paged(page));
  };

  self.findById = async (id) => {
    return await customers()
      .select(...fields, 'cities.name as city', 'companies.name as company')
      .leftJoin('cities', 'customers.city', 'cities.id')
      .leftJoin('companies', 'customers.company', 'companies.id')
      .where('customers.id', id)
      .first();
  };

  self.findByCityPaged = async (city, page = 0) => {
    return await customers()
      .select(...fields, 'companies.name as company')
      .leftJoin('companies', 'customers.company', 'companies.id')
      .where('customers.city', city)
      .limit(10)
      .offset(paged(page));
  };

  self.totalByCity = async () => {
    return await customers()
      .select('cities.name as city')
      .count('customers.id', {as: 'customers'})
      .leftJoin('cities', 'cities.id', 'customers.city')
      .groupBy('city');
  };

  return self;
};
