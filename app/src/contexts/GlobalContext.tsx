import { iContact } from "@/services/apiContact";
import { iEmailandPhoneNumber, iUser } from "@/services/apiUser";
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
  isView: boolean;
  setIsView: Dispatch<SetStateAction<boolean>>;
  elem: iUser | iContact | undefined;
  setElem: Dispatch<SetStateAction<iUser | iContact | undefined>>;
  elemSecond: iEmailandPhoneNumber | undefined;
  setElemSecond: Dispatch<SetStateAction<iEmailandPhoneNumber | undefined>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  option: "update" | "delete" | "create" | undefined;
  setOption: Dispatch<
    SetStateAction<"update" | "delete" | "create" | undefined>
  >;
  second: "fullName" | "username" | "password" | "email" | "phone" | undefined;
  setSecond: Dispatch<
    SetStateAction<
      "fullName" | "username" | "password" | "email" | "phone" | undefined
    >
  >;
  route: "user" | "contact" | undefined;
  setRoute: Dispatch<SetStateAction<"user" | "contact" | undefined>>;
  id: string | undefined;
  setId: Dispatch<SetStateAction<string | undefined>>;
  idSecond: string | undefined;
  setIdSecond: Dispatch<SetStateAction<string | undefined>>;
}

const GlobalContext = createContext<iGlobalContext>({} as iGlobalContext);

const GlobalProvider = ({ children }: iGlobalProps) => {
  const [theme, setTheme] = useState("light");
  const [isView, setIsView] = useState(false);
  const [elem, setElem] = useState<iUser | iContact>();
  const [elemSecond, setElemSecond] = useState<iEmailandPhoneNumber>();
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState<"create" | "update" | "delete">();
  const [second, setSecond] = useState<
    "fullName" | "username" | "password" | "email" | "phone"
  >();
  const [route, setRoute] = useState<"user" | "contact">();
  const [id, setId] = useState<string>();
  const [idSecond, setIdSecond] = useState<string>();

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
        isView,
        setIsView,
        elem,
        setElem,
        elemSecond,
        setElemSecond,
        loading,
        setLoading,
        option,
        setOption,
        route,
        setRoute,
        second,
        setSecond,
        id,
        setId,
        idSecond,
        setIdSecond,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
