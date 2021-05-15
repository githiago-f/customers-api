/// init express
import express, { Router } from 'express';
import morgan from 'morgan';
import { CustomerController } from './controller/customer-controller';
import { isProduction } from './util/is-production';

const app = express();

app.use(morgan(isProduction() ? 'short' : 'dev'));

app.use(express.json());

app.use('/customer', CustomerController(Router()));

app.listen(8080, () => {
  console.log('Listening at 8080');
});
