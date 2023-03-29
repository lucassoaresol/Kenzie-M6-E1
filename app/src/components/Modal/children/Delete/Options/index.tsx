import { useContactContext } from "@/contexts/ContactContext";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useUserContext } from "@/contexts/UserContext";
import React from "react";

const Options = () => {
  const { destroyUser, destroyEmailUser, destroyPhoneUser } = useUserContext();
  const { destroyContact, destroyEmailContact, destroyPhoneContact } =
    useContactContext();
  const { route, second, id, idSecond } = useGlobalContext();
  switch (route) {
    case "contact":
      switch (second) {
        case "email":
          if (id && idSecond) {
            return (
              <button onClick={() => destroyEmailContact(id, idSecond)}>
                Continuar
              </button>
            );
          }

        case "phone":
          if (id && idSecond) {
            return (
              <button onClick={() => destroyPhoneContact(id, idSecond)}>
                Continuar
              </button>
            );
          }
      }
      if (id) {
        return <button onClick={() => destroyContact(id)}>Continuar</button>;
      }
    case "user":
      switch (second) {
        case "email":
          if (idSecond) {
            return (
              <button onClick={() => destroyEmailUser(idSecond)}>
                Continuar
              </button>
            );
          }

        case "phone":
          if (idSecond) {
            return (
              <button onClick={() => destroyPhoneUser(idSecond)}>
                Continuar
              </button>
            );
          }
      }
      return <button onClick={destroyUser}>Continuar</button>;
  }
  return <></>;
};

export default Options;
