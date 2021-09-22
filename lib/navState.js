import { useState, useContext, createContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function NavStateProvider({ children }) {
  // This is our own custom provider
  // We will store data (state) and funcionality (updates)
  // Anyoune can access it via consumer
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <LocalStateProvider value={{ navOpen, setNavOpen, toggleNav }}>
      {children}
    </LocalStateProvider>
  );
}

// Make a custom hook for accesing the cart local state

function useNav() {
  // We use a consumer to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { NavStateProvider, useNav };
