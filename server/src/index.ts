import express, { Router } from 'express';
import morgan from 'morgan';
import { CityController } from './controller/city-controller';
import { CompanyController } from './controller/company-controller';
import { CustomerController } from './controller/customer-controller';
import { devConnection, prodConnection } from './util/connections';
import { isProduction } from './util/is-production';

const conn = isProduction() ? prodConnection() : devConnection();

const app = express();

app.use(morgan(isProduction() ? 'short' : 'dev'));

app.use(express.json());

app.use('/city', CityController(Router(), conn));
app.use('/company', CompanyController(Router(), conn));
app.use('/customer', CustomerController(Router(), conn));

app.listen(8080, () => {
  console.log('Listening at 8080');
});
