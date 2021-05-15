import { CompanyRepository } from 'portfolio-domain';
import { DBConnection } from '../util/connections';
import { Exists } from './errors/exists';

export const CompanyRepositoryKNEX = (conn: DBConnection) => {
  const self = {} as CompanyRepository;

  const companies = () => conn().table('companies');

  self.create = async (company) => {
    const trx = await conn.transaction();
    try {
      const table = trx.table('companies');
      const [row] = await table
        .where('name', company.name)
        .count({exists: 'id'});
      if(row.exists>0) {
        throw new Exists('Company');
      }
      const created = await table.insert(company, '*');
      await trx.commit();
      return created.shift();
    } catch(e) {
      await trx.rollback();
      throw e;
    }
  };

  self.getAll = async () => {
    return await companies().select('*');
  };

  return self;
};
