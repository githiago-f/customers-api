process.env.UV_THREAD_POOL = '1';
import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {config} from 'dotenv';
import {resolve} from 'path';
import { createServer } from 'http';
import {Server} from 'socket.io';
import { CityController } from './controller/city-controller';
import { CompanyController } from './controller/company-controller';
import { CustomerController } from './controller/customer-controller';
import { devConnection, prodConnection } from './util/connections';
import { isProduction } from './util/is-production';

config({
  path: resolve(__dirname, '../local.env')
});

const connection = isProduction() ? prodConnection() : devConnection();

const serverPort = process.env.PORT || 8080;
const app = express();
const server = createServer(app);

const socket = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET','POST','OPTIONS','PATCH']
  }
});

app.use(morgan(isProduction() ? 'short' : 'dev'));
app.use(cors());
app.use(express.json());

app.use('/city', CityController(Router(), connection));
app.use('/company', CompanyController(Router(), connection));
app.use('/customer', CustomerController(Router(), connection, socket));

socket.on('connect', () => {
  console.log('User has connected.\n');
});

socket.on('disconnect', () => {
  console.log('User has disconnected');
});

server.listen(serverPort, () => {
  console.log(`Listening at ${serverPort}`);
});
