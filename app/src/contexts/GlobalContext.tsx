import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface iGlobalProps {
  children: ReactNode;
}

interface iGlobalContext {
  theme: string;
  toggleTheme: () => void;
  globalLoading: boolean | undefined;
  setGlobalLoading: Dispatch<SetStateAction<boolean | undefined>>;
  isClickMobile: boolean;
  setIsClickMobile: Dispatch<SetStateAction<boolean>>;
  isView: boolean;
  setIsView: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<iGlobalContext>({} as iGlobalContext);

const GlobalProvider = ({ children }: iGlobalProps) => {
  const [theme, setTheme] = useState("light");
  const [globalLoading, setGlobalLoading] = useState<boolean>();
  const [isClickMobile, setIsClickMobile] = useState(false);
  const [isView, setIsView] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("@ThemeKenzieM6E1", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("@ThemeKenzieM6E1", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("@ThemeKenzieM6E1");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        globalLoading,
        setGlobalLoading,
        isClickMobile,
        setIsClickMobile,
        isView,
        setIsView,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
