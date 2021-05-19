import { Socket } from 'socket.io';
import { DBConnection } from '../util/connections';

export const SocketController = (socket: Socket, con: DBConnection) => {
  con.on('', () => {
    socket.emit('');
  });

  return socket;
};
