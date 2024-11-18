"use client";

import React, { createContext, useState } from "react";

// Create a Context
export const AppContext = createContext();

const Provider = ({ children }) => {
  const [showGenerateButton, setShowGenerateButton] = useState(false);

  return (
    <AppContext.Provider value={{ showGenerateButton, setShowGenerateButton }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
