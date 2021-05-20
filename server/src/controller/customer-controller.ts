import { Controller } from './controller';
import { Customer } from 'portfolio-domain';
import { Created } from '../util/res/created-response';
import { CustomerRepositoryKNEX } from '../repository/customer-repository';
import { Unprocessable } from '../util/res/unprocessable-response';
import { Conflict } from '../util/res/conflict-response';
import { Ok } from '../util/res/ok-response';
import { InternalError } from '../util/res/internal-response';

export const CustomerController: Controller = (router, con, socket) => {
  const customerRepository = CustomerRepositoryKNEX(con);

  router.get('/', async (req, res) => {
    try {
      type Query = {
        page?:number;
        city?:number;
      };
      const { page, city } = req.query as Query;
      if(city) {
        const customersByCity = await customerRepository.findByCityPaged(city, page);
        return Ok(res, customersByCity);
      }
      const customers = await customerRepository.findAllPaged(page);
      return Ok(res, customers);
    }catch (e){
      return InternalError(res, e);
    }
  });

  router.get('/groupByCity', (_, res) => {
    customerRepository.totalByCity()
      .then(data => Ok(res, data))
      .catch(e => InternalError(res, e));
  });

  router.get('/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const customer = await customerRepository.findById(id);
      return Ok(res, customer);
    } catch (e) {
      return InternalError(res, e);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const customer = Customer(req.body);
      const created = await customerRepository.create(customer);
      socket.emit('alterated customers');
      return Created(res, created);
    } catch(e) {
      if(/^Invalid/.test(e.name)) { return Unprocessable(res, e); }
      if(e.name === 'EntryConflict') { return Conflict(res, e); }
      return InternalError(res, e);
    }
  });

  router.patch('/', async (req, res) => {
    try {
      const customer = Customer(req.body);
      const updated = await customerRepository.update(customer);
      socket.emit('alterated customers');
      return res.status(202).json(updated);
    } catch (e) {
      if(/^Invalid/.test(e.name)) { return Unprocessable(res, e); }
      return InternalError(res, e);
    }
  });

  return router;
};
