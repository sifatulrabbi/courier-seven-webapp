import React from 'react';
// eslint-disable-next-line no-unused-vars
import { io, Socket } from 'socket.io-client';

const SocketContext = React.createContext({
  /**
   * @type {Socket | {}}
   */
  socket: {},
  /**
   * @param {string} userId
   */
  connectAs: function (userId) {},
});

export function useSocket() {
  return React.useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = React.useState({});

  function connectAs(userId) {
    const newSocket = io('http://localhost:5007', {
      query: { user_id: userId },
    });
    setSocket(newSocket);
  }

  return (
    <SocketContext.Provider value={{ socket, connectAs }}>
      {children}
    </SocketContext.Provider>
  );
}
