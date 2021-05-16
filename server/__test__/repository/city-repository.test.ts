import {createConnection} from '../connection/connection';
import {CityRespositoryKNEX} from '../../src/repository/city-repository';
import { City, CityDTO, CityRepository } from 'portfolio-domain';
import { Knex } from 'knex';

describe('#CityRepository', () => {
  let cityRepository: CityRepository;
  let conn: Knex<CityDTO, City[]>;
  beforeEach(async () => {
    conn = await createConnection();
    cityRepository = CityRespositoryKNEX(conn);
  });

  afterEach(async () => {
    await conn.destroy();
  });

  describe('.create', () => {
    describe('when data\'s name is unique', () => {
      it('create a new entry', async () => {
        await cityRepository.create({name: 'Rio de Janeiro,RJ'});
        const all = await cityRepository.getAll();
        expect(all.length).toBe(4);
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

  describe('.getAll', () => {
    it('returns a list with one item', async () => {
      const all = await cityRepository.getAll();
      expect(all.length).toBe(3);
      expect(all.shift()).toMatchObject({
        id: 1,
        name: 'Esteio,RS'
      });
    });
  });
});
