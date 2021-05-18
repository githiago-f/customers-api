process.env.UV_THREAD_POOL = '1';
import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { CityController } from './controller/city-controller';
import { CompanyController } from './controller/company-controller';
import { CustomerController } from './controller/customer-controller';
import { devConnection, prodConnection } from './util/connections';
import { isProduction } from './util/is-production';

const conn = isProduction() ? prodConnection() : devConnection();

const serverPort = process.env.PORT || 8080;
const app = express();

app.use(morgan(isProduction() ? 'short' : 'dev'));
app.use(cors());
app.use(express.json());

app.use('/city', CityController(Router(), conn));
app.use('/company', CompanyController(Router(), conn));
app.use('/customer', CustomerController(Router(), conn));

app.listen(serverPort, () => {
  console.log(`Listening at ${serverPort}`);
});
