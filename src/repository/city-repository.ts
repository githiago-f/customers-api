import { CityRepository } from 'portfolio-domain';
import { DBConnection } from '../util/connections';
import { Exists } from './errors/exists';

export const CityRespositoryKNEX = (conn: DBConnection) => {
  const self = {} as CityRepository;

  const cities = () => conn.table('cities');

  self.create = async (city) => {
    const trx = await conn.transaction();
    try {
      const table = trx.table('cities');
      const [row] = await table
        .where('name', city.name)
        .count({exists: 'id'});
      if(row.exists>0) {
        throw new Exists('City');
      }
      const created = await table.insert(city, '*');
      await trx.commit();
      return created.shift();
    } catch(e) {
      await trx.rollback();
      throw e;
    }
  };

  self.getAll = async () => {
    return await cities().select('*');
  };

  return self;
};
