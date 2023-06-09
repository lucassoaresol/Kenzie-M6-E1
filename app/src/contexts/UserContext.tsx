import { iLogin, postLogin } from "@/services/apiLogin";
import {
  deleteUser,
  patchUser,
  patchPassword,
  postUserCreate,
  patchEmailUser,
  patchPhoneUser,
  deleteEmailUser,
  deletePhoneUser,
  postUserCreateEmail,
  postUserCreatePhone,
} from "@/services/apiUser";
import { useRouter } from "next/router";
import { destroyCookie, setCookie } from "nookies";
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
  createEmailUser: (data: FieldValues) => Promise<void>;
  createPhoneUser: (data: FieldValues) => Promise<void>;
  updateUser: (data: FieldValues) => Promise<void>;
  updateUsername: (data: FieldValues) => Promise<void>;
  updatePassword: (data: FieldValues) => Promise<void>;
  updateEmailUser: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  updatePhoneUser: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  destroyUser: () => Promise<void>;
  destroyEmailUser: (id: string) => Promise<void>;
  destroyPhoneUser: (id: string) => Promise<void>;
}

const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProps) => {
  const { setLoading, setOption, setSecond, setRoute, setId, setIdSecond } =
    useGlobalContext();

  const router = useRouter();

  const login = async (data: FieldValues) => {
    try {
      setLoading(true);
      const { token }: iLogin = await postLogin(data);
      localStorage.setItem("@TokenKenzieM6E1", token);
      setCookie(null, "@TokenKenzieM6E1", token);
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
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const createUser = async (data: FieldValues) => {
    try {
      setLoading(true);
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
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const createEmailUser = async (data: FieldValues) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await postUserCreateEmail(token, data);
        toast.success("Email adicionado com sucesso!", {
          autoClose: 3000,
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const createPhoneUser = async (data: FieldValues) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await postUserCreatePhone(token, data);
        toast.success("Contato adicionado com sucesso!", {
          autoClose: 3000,
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const updateUser = async (data: FieldValues) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await patchUser(token, data);
        toast.success("Conta alterada com sucesso!", {
          autoClose: 900,
        });
        router.replace("/");
      } catch (error) {
        toast.error("O login já existe", {
          autoClose: 3000,
        });
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const updateEmailUser = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && idSecond) {
      try {
        setLoading(true);
        await patchEmailUser(token, data, idSecond);
        toast.success("Email alterado com sucesso!", {
          autoClose: 900,
        });
        router.replace("/");
      } catch (error) {
        console.log(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const updatePhoneUser = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && idSecond) {
      try {
        setLoading(true);
        await patchPhoneUser(token, data, idSecond);
        toast.success("Contato alterado com sucesso!", {
          autoClose: 900,
        });
        router.replace("/");
      } catch (error) {
        console.log(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const updateUsername = async (data: FieldValues) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await patchUser(token, data);
        toast.success("Conta alterada com sucesso!", {
          autoClose: 900,
        });
        destroyCookie(null, "@TokenKenzieM6E1");
        localStorage.setItem("@TokenKenzieM6E1", "");
        router.replace("/login");
      } catch (error) {
        toast.error("O login já existe", {
          autoClose: 3000,
        });
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const updatePassword = async (data: FieldValues) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await patchPassword(token, data);
        toast.success("Senha alterada com sucesso!", {
          autoClose: 900,
        });
        destroyCookie(null, "@TokenKenzieM6E1");
        localStorage.setItem("@TokenKenzieM6E1", "");
        router.replace("/login");
      } catch (error) {
        toast.error("Senha atual incorreta!", {
          autoClose: 3000,
        });
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const destroyUser = async () => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await deleteUser(token);
        destroyCookie(null, "@TokenKenzieM6E1");
        localStorage.setItem("@TokenKenzieM6E1", "");
        toast.success("Conta deletada com sucesso!", {
          autoClose: 900,
        });
        router.replace("/login");
      } catch (error) {
        console.error(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const destroyEmailUser = async (id: string) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await deleteEmailUser(token, id);
        toast.success("Email removido com sucesso!", {
          autoClose: 900,
        });
        router.replace("/");
      } catch (error) {
        console.error(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  const destroyPhoneUser = async (id: string) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await deletePhoneUser(token, id);
        toast.success("Contato removido com sucesso!", {
          autoClose: 900,
        });
        router.replace("/");
      } catch (error) {
        console.error(error);
      } finally {
        setOption(undefined);
        setSecond(undefined);
        setRoute(undefined);
        setId(undefined);
        setIdSecond(undefined);
        setLoading(false);
      }
    } else {
      setOption(undefined);
      setSecond(undefined);
      setRoute(undefined);
      setId(undefined);
      setIdSecond(undefined);
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        createUser,
        createEmailUser,
        createPhoneUser,
        updateUser,
        updateUsername,
        updatePassword,
        updateEmailUser,
        updatePhoneUser,
        destroyUser,
        destroyEmailUser,
        destroyPhoneUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
