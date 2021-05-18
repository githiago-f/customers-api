import {createConnection} from '../connection/connection';
import {CompanyRepositoryKNEX} from '../../src/repository/company-repository';
import { Company, CompanyDTO, CompanyRepository } from 'portfolio-domain';
import { Knex } from 'knex';

describe('#CompanyRepository', () => {
  let companyRepository: CompanyRepository,
    con: Knex<CompanyDTO, Company[]>;
  beforeEach(async () => {
    con = await createConnection();
    companyRepository = CompanyRepositoryKNEX(con);
  });
  afterAll(async () => {
    await con.destroy();
  });

  describe('.create', () => {
    describe('when name is unique', () => {
      it('creates a new entry', async () => {
        await companyRepository.create({name: 'SoftwareBank ltda.'});
        const all = await companyRepository.getAll();
        expect(all.length).toBe(4);

      });
    });
    describe('when the name not unique', () => {
      it('thorws existent entry exception', () => {
        expect.assertions(1);
        return companyRepository.create({name: 'GitHub'}).catch(e => {
          expect(e).toMatchObject({
            name: 'EntryConflict'
          });
        });
      });
    });
  });
  describe('.getAll', () => {
    it('returns all entries', async () => {
      const all = await companyRepository.getAll();
      expect(all.length).toBe(3);
    });
  });
});
