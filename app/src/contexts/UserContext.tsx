import { iLogin, postLogin } from "@/services/apiLogin";
import { postUserCreate } from "@/services/apiUser";
import { useRouter } from "next/router";
import { createContext, useContext, ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalContext } from "./GlobalContext";

interface iUserProps {
  children: ReactNode;
}

interface iUserContext {
  login: (data: FieldValues) => Promise<void>;
  createUser: (data: FieldValues) => Promise<void>;
}

const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProps) => {
  const { setGlobalLoading } = useGlobalContext();
  const router = useRouter();

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
    <UserContext.Provider
      value={{
        login,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
