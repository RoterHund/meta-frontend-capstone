import React from 'react';
import UserContext from './UserContext';

function UserProvider({ children, user }) {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;