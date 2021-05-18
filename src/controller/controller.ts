import { Router } from 'express';
import { DBConnection } from '../util/connections';

export type Controller = (router: Router, connection?: DBConnection) => Router;
