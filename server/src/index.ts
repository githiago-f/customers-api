process.env.UV_THREAD_POOL = '1';
import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import {resolve} from 'path';
import { CityController } from './controller/city-controller';
import { CompanyController } from './controller/company-controller';
import { CustomerController } from './controller/customer-controller';
import { prodConnection } from './util/connections';
import { isProduction } from './util/is-production';

config({
  path: resolve(__dirname, '../local.env')
});

const connection = prodConnection();

const serverPort = process.env.PORT || 8080;
const app = express();

app.use(morgan(isProduction() ? 'short' : 'dev'));
app.use(cors());
app.use(express.json());

app.use('/city', CityController(Router(), connection));
app.use('/company', CompanyController(Router(), connection));
app.use('/customer', CustomerController(Router(), connection));

app.listen(serverPort, () => {
  console.log(`Listening at ${serverPort}`);
});
