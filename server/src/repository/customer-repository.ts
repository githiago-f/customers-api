import { CustomerRepository, Paged } from 'portfolio-domain';
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
export const CustomerRepositoryKNEX = (conn: DBConnection) => {
  const self = {} as CustomerRepository;
  const fields = [
    'customers.id',
    'customers.first_name',
    'customers.last_name',
    'customers.email',
    'customers.titulation'
  ];

  const customers = () => conn.table('customers');

  self.create = async (customer) => {
    const trx = await conn.transaction();
    try {
      const table = trx.table('customers');
      const [row] = await table
        .where('email', customer.email)
        .count({exists: 'id'});
      if(row.exists>0) {
        throw new Exists('Customer');
      }
      const created = await table.insert(customer, '*');
      await trx.commit();
      return created.shift();
    } catch(e) {
      await trx.rollback();
      throw e;
    }
  };

  self.findAllPaged = async (page = 0) => {
    const data = await customers().select()
      .limit(10)
      .offset(paged(page));
    const query = customers().count('id', {as: 'count'}).first();
    const pages = Math.ceil((await query).count as number / 10);
    return Paged({results: data, pages });
  };

  self.findById = async (id) => {
    return await customers()
      .select('customers.*', 'cities.id as city', 'companies.id as company')
      .leftJoin('cities', 'customers.city', 'cities.id')
      .leftJoin('companies', 'customers.company', 'companies.id')
      .where('customers.id', id)
      .first() || null;
  };

  self.findByCityPaged = async (city, page = 0) => {
    if(isNaN(city)) {
      const localCity = await conn.table('cities')
        .select('id')
        .where({name:city})
        .first();
      city = localCity.id;
    }

    const data = await customers()
      .select(...fields, 'companies.name as company')
      .leftJoin('companies', 'customers.company', 'companies.id')
      .where('customers.city', city)
      .limit(10)
      .offset(paged(page));

    const num = await customers()
      .where('customers.city', city)
      .count('id', {as: 'count'})
      .first();

    const pages = Math.ceil(num.count as number / 10);

    return Paged({results: data, pages});
  };

  self.totalByCity = async () => {
    return await customers()
      .select('cities.name as city', 'cities.id as city_id')
      .count('customers.id', {as: 'customers_total'})
      .leftJoin('cities', 'cities.id', 'customers.city')
      .groupBy('city');
  };

  self.update = async (customer) => {
    if(!customer.id) {
      throw new Error('Customer isn\'t present');
    }
    const tcx = await conn.transaction();
    try {
      await tcx.table('customers')
        .where('id', customer.id)
        .update(customer);
      await tcx.commit();
      return await customers()
        .where('id', customer.id)
        .first();
    } catch (e) {
      await tcx.rollback();
    }
  };

  return self;
};
