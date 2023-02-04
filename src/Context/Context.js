const { createContext, useState } = require("react");

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
