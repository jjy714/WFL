import React, { createContext, useState } from 'react';


export const LoginContext = createContext();
export const AccountContext = createContext();


export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  
  const updateLogin = (status) => {
    setIsLoggedIn(status);
  };
  const updateToken = (status) => {
    setToken(status);
  }
  const updateUser = (status) => {
    setUser(status);
  }
  return (
    <LoginContext.Provider value={{ isLoggedIn, token, user, updateLogin, updateToken, updateUser}}>
      {children}
    </LoginContext.Provider>
  );
};
