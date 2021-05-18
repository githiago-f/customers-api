import { City } from 'portfolio-domain';
import { CityRespositoryKNEX } from '../repository/city-repository';
import { Conflict } from '../util/res/conflict-response';
import { Created } from '../util/res/created-response';
import { InternalError } from '../util/res/internal-response';
import { Ok } from '../util/res/ok-response';
import { Unprocessable } from '../util/res/unprocessable-response';
import { Controller } from './controller';

export const CityController: Controller = (router, con) => {
  const cityRepository = CityRespositoryKNEX(con);

  router.get('/', (req, res) => {
    cityRepository.getAll()
      .then(all => Ok(res, all))
      .catch(e => InternalError(res, e));
  });

  router.post('/', async (req, res) => {
    try {
      const city = City(req.body);
      const created = await cityRepository.create(city);
      return Created(res, created);
    } catch (e) {
      if(/Invalid/.test(e.name)) { return Unprocessable(res, e); }
      if(e.name === 'EntryConflict') { return Conflict(res, e); }
      return InternalError(res, e);
    }
  });

  return router;
};
