import React, { createContext, useContext, ReactNode } from "react";

interface AppContextProps {
  name: string;
  profession: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const contextValue = {
    name: "Arthur Torres",
    profession: "Computer Information Engineer",
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
