import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNuiEvent } from "./useNuiEvent";

export type languages = "pt-br" | "en-us";

interface UseLanguageContext {
  selectedLanguage: languages;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<languages>>;
}

export const UseLanguageContext = createContext({} as UseLanguageContext);

interface UseLanguageProviderProps {
  children: ReactNode;
}

export const UseLanguageProvider: React.FC<UseLanguageProviderProps> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<languages>("en-us");

  useNuiEvent("select-language", (data) => {
    setSelectedLanguage(data.language);
  });

  useEffect(() => {
    const language = window.localStorage.getItem("language");
    if (language) {
      setSelectedLanguage(language as languages);
    }
  }, []);

  return (
    <UseLanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage }}
    >
      {children}
    </UseLanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(UseLanguageContext);
};
