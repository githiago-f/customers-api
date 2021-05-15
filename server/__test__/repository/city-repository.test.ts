import {testConnection} from '../mocks/connection';
import {CityRespositoryKNEX} from '../../src/repository/city-repository';
import { CityRepository } from 'portfolio-domain';
import { Knex } from 'knex';

describe('#CityRepository', () => {
  let cityRepository: CityRepository;
  let conn: Knex<any, unknown[]>;
  beforeEach(async () => {
    conn = testConnection();
    await conn.migrate.latest();
    cityRepository = CityRespositoryKNEX(conn);
    await cityRepository.create({name: 'Esteio,RS'});
  });

  afterEach(async () => {
    await conn.destroy();
  });

  describe('.create', () => {
    describe('when data\'s name is unique', () => {
      it('create a new entry', async () => {
        await cityRepository.create({name: 'Porto Alegre,RS'});
        const all = await cityRepository.getAll();
        expect(all.length).toBe(2);
      });
    });
    describe('when data already exists', () => {
      it('does not create new entry and trhows error', () => {
        expect.assertions(1);
        return cityRepository.create({name: 'Esteio,RS'}).catch(e => {
          expect(e).toMatchObject({
            name: 'EntryConflict',
            message: 'City already exists.'
          });
        });
      });
    });
  });
});
