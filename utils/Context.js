import React, { createContext, useState } from "react";

const Context = createContext({});

function ContextProvider({ children }) {
  const [lang, setLang] = useState("fr");
  return (
    <Context.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider };
export default Context;
