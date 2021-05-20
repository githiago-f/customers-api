import { Router } from 'express';
import { Server } from 'socket.io';
import { DBConnection } from '../util/connections';

export type Controller = (router: Router, connection?: DBConnection, socket?: Server) => Router;
