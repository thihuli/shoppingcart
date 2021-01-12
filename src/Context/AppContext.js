import { createContext } from 'react';

const AppContext = createContext({});

export const Provider = ({children}) => {
  return (
    <AppContext.Provider value={
      {
        price: null,
        items: null
      }
    }>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext;