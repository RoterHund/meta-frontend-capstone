import React, { useContext } from 'react';

const UserContext = React.createContext(undefined);
function useUser() {
  const user = useContext(UserContext);
  return user;
}

export default useUser;