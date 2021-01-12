import { createContext, useState } from 'react';

const AppContext = createContext({});

export const Provider = ({children}) => {
  const [data, setData] = useState({
    price: null,
    items: null,
    money: null
  });

  return (
    <AppContext.Provider value={{data: data, setData}}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext;