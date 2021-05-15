import { Company } from 'portfolio-domain';
import { CompanyRepositoryKNEX } from '../repository/company-repository';
import { Conflict } from '../util/res/conflict-response';
import { Created } from '../util/res/created-response';
import { InternalError } from '../util/res/internal-response';
import { Ok } from '../util/res/ok-response';
import { Unprocessable } from '../util/res/unprocessable-response';
import { Controller } from './controller';

export const CompanyController: Controller = (router, con) => {
  const companyRepository = CompanyRepositoryKNEX(con);

  router.get('/', (_, res) => {
    companyRepository.getAll()
      .then(all => Ok(res, all))
      .catch(e => InternalError(res, e));
  });

  router.post('/', async (req, res) => {
    try {
      const company = Company(req.body);
      const created = await companyRepository.create(company);
      return Created(res, created);
    } catch (e) {
      if(/Invalid/.test(e.name)) { return Unprocessable(res, e); }
      if(e.name === 'EntryConflict') { return Conflict(res, e); }
      return InternalError(res, e);
    }
  });

  return router;
};
