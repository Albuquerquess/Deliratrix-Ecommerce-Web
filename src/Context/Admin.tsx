import React from 'react';

// import { Container } from './styles';

const initialState = {
  getToken: () => '',
  registerToken: (token: string) => {}
}

export const AdminContext = React.createContext(initialState)


export const AdminProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState('')
  
  function registerToken(token: string) {
    return setToken(token)
  }

  function getToken() {
    return token
  }
    

  return <AdminContext.Provider value={{getToken, registerToken}}>
    {children}
  </AdminContext.Provider>;
}