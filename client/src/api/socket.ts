import io from 'socket.io-client';
import { hosts, isProduction } from './config';

export const connect = () => {
  const socket = io(isProduction ? hosts.PRODUCTION_URL : hosts.DEVELOPMENT_URL);
  return socket;
};
