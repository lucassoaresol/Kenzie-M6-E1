import {
  deleteContact,
  deleteEmailContact,
  deletePhoneContact,
  patchContact,
  patchEmailContact,
  patchPhoneContact,
  postContactCreate,
  postContactCreateEmail,
  postContactCreatePhone,
} from "@/services/apiContact";
import { useRouter } from "next/router";
import { createContext, useContext, ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalContext } from "./GlobalContext";

interface iContactProps {
  children: ReactNode;
}

interface iContactContext {
  createContact: (data: FieldValues) => Promise<void>;
  createEmailContact: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  createPhoneContact: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  updateContact: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  updateEmailContact: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  updatePhoneContact: (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => Promise<void>;
  destroyContact: (id: string) => Promise<void>;
  destroyEmailContact: (id: string, idSecond: string) => Promise<void>;
  destroyPhoneContact: (id: string, idSecond: string) => Promise<void>;
}

const ContactContext = createContext<iContactContext>({} as iContactContext);

const ContactProvider = ({ children }: iContactProps) => {
  const { setLoading, setOption, setSecond, setRoute, setId, setIdSecond } =
    useGlobalContext();

  const router = useRouter();

  const createContact = async (data: FieldValues) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await postContactCreate(token, data);
        toast.success("Contanto adicionado com sucesso!", {
          autoClose: 3000,
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

  const createEmailContact = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id) {
      try {
        setLoading(true);
        await postContactCreateEmail(token, data, id);
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

  const createPhoneContact = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id) {
      try {
        setLoading(true);
        await postContactCreatePhone(token, data, id);
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

  const updateContact = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id) {
      try {
        setLoading(true);
        await patchContact(token, data, id);
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

  const updateEmailContact = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id && idSecond) {
      try {
        setLoading(true);
        await patchEmailContact(token, data, id, idSecond);
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

  const updatePhoneContact = async (
    data: FieldValues,
    id?: string,
    idSecond?: string
  ) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id && idSecond) {
      try {
        setLoading(true);
        await patchPhoneContact(token, data, id, idSecond);
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

  const destroyContact = async (id: string) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token) {
      try {
        setLoading(true);
        await deleteContact(id, token);
        toast.success("Contato deletado com sucesso!", {
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

  const destroyEmailContact = async (id: string, idSecond: string) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id && idSecond) {
      try {
        setLoading(true);
        await deleteEmailContact(token, id, idSecond);
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

  const destroyPhoneContact = async (id: string, idSecond: string) => {
    const token = localStorage.getItem("@TokenKenzieM6E1");
    if (token && id && idSecond) {
      try {
        setLoading(true);
        await deletePhoneContact(token, id, idSecond);
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
    <ContactContext.Provider
      value={{
        createContact,
        createEmailContact,
        createPhoneContact,
        updateContact,
        updateEmailContact,
        updatePhoneContact,
        destroyContact,
        destroyEmailContact,
        destroyPhoneContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

const useContactContext = () => useContext(ContactContext);

export { ContactProvider, useContactContext };
