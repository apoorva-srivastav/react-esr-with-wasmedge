
import React,{createContext, useContext, useState} from 'react';

// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

const CartSetContext = createContext(null);
const CartGetContext = createContext(null)

export function CartProvider({children}) {
  const [contextValue, setValue] = useState([])
  return <CartGetContext.Provider value={contextValue}>
    <CartSetContext.Provider value={setValue}>
    {children}
    </CartSetContext.Provider>
   
    </CartGetContext.Provider>;
}

export function useGetData() {
  const ctx = useContext(CartGetContext);
  return ctx;
}

export function useSetData() {
  const ctx = useContext(CartSetContext);
  return ctx;
}