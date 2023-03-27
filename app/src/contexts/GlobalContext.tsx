import { iLogin, postLogin } from "@/services/apiLogin";
import { postUserCreate } from "@/services/apiUser";
import { useRouter } from "next/router";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

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
  login: (data: FieldValues) => Promise<void>;
  createUser: (data: FieldValues) => Promise<void>;
}

const GlobalContext = createContext<iGlobalContext>({} as iGlobalContext);

const GlobalProvider = ({ children }: iGlobalProps) => {
  const [theme, setTheme] = useState("light");
  const [globalLoading, setGlobalLoading] = useState<boolean>();
  const [isClickMobile, setIsClickMobile] = useState(false);
  const [isView, setIsView] = useState(false);

  const router = useRouter();

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("@ThemeGetSoluções", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("@ThemeGetSoluções", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("@ThemeGetSoluções");
    localTheme && setTheme(localTheme);
  }, []);

  const login = async (data: FieldValues) => {
    try {
      setGlobalLoading(true);
      const { token }: iLogin = await postLogin(data);
      localStorage.setItem("@TokenKenzieM6E1", token);
      toast.success("Login feito com sucesso!", {
        autoClose: 900,
      });
      router.replace("/");
    } catch (error) {
      console.error(error);
      toast.error("Combinação incorreta de e-mail/senha", {
        autoClose: 3000,
      });
    } finally {
      setGlobalLoading(false);
    }
  };

  const createUser = async (data: FieldValues) => {
    try {
      setGlobalLoading(true);
      await postUserCreate(data);
      toast.success("Conta criada com sucesso!", {
        autoClose: 3000,
      });
      router.push("/");
    } catch (error) {
      toast.error("O login já existe", {
        autoClose: 3000,
      });
    } finally {
      setGlobalLoading(false);
    }
  };

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
        login,
        createUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
