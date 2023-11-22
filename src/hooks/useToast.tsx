import { ReactNode, createContext, useContext } from "react";
import { useNuiEvent } from "./useNuiEvent";

interface UseToastContext {}

export const UseToastContext = createContext({} as UseToastContext);

interface UseLanguageProviderProps {
  children: ReactNode;
}

export const UseToastProvider: React.FC<UseLanguageProviderProps> = ({
  children,
}) => {
  useNuiEvent("notify", (data) => {
    console.log(data);
  });

  return (
    <UseToastContext.Provider value={{}}>{children}</UseToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(UseToastContext);
};
