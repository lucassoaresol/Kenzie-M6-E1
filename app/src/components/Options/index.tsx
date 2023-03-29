/* eslint-disable react/no-children-prop */
import { useContactContext } from "@/contexts/ContactContext";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useUserContext } from "@/contexts/UserContext";
import emailSchema from "@/validations/email";
import fullNameSchema from "@/validations/fullName";
import phoneNumberSchema from "@/validations/phoneNumber";
import updatePasswordSchema from "@/validations/updatePassword";
import usernameSchema from "@/validations/username";
import InfoEdit from "../EditInfor";
import Modal from "../Modal";
import AddContato from "../Modal/children/AddContato";
import DeleteCard from "../Modal/children/Delete";
import EditPassword from "../Modal/children/Edit/Password";
import EditText from "../Modal/children/Edit/Text";

const Options = () => {
  const { elem, elemSecond, option, second, route, idSecond } =
    useGlobalContext();
  const {
    createEmailUser,
    createPhoneUser,
    updateUser,
    updateUsername,
    updatePassword,
    updateEmailUser,
    updatePhoneUser,
  } = useUserContext();
  const {
    createEmailContact,
    createPhoneContact,
    updateContact,
    updateEmailContact,
    updatePhoneContact,
  } = useContactContext();
  if (route === "user") {
    switch (option) {
      case "create":
        switch (second) {
          case "email":
            return (
              <Modal
                name="Adicionar Email"
                children={
                  <EditText
                    idField="email"
                    name="Email"
                    placeholder="Digite aqui o email"
                    schema={emailSchema}
                    send={createEmailUser}
                  />
                }
              />
            );
          case "phone":
            return (
              <Modal
                name="Adicionar Contato"
                children={
                  <EditText
                    idField="phoneNumber"
                    name="Contato"
                    placeholder="Digite aqui o contato"
                    schema={phoneNumberSchema}
                    send={createPhoneUser}
                  />
                }
              />
            );
        }
      case "update":
        switch (second) {
          case "fullName":
            return (
              <Modal
                name="Alterar Nome Completo"
                elemInfo={elem?.fullName}
                children={
                  <EditText
                    idField="fullName"
                    name="Nome Completo"
                    placeholder="Digite aqui o novo nome"
                    schema={fullNameSchema}
                    send={updateUser}
                  />
                }
              />
            );
          case "username":
            return (
              <Modal
                name="Alterar Login"
                elemInfo={elem?.username}
                children={
                  <EditText
                    idField="username"
                    name="Login"
                    placeholder="Digite aqui o novo login"
                    schema={usernameSchema}
                    send={updateUsername}
                  />
                }
                isDelete
              />
            );
          case "password":
            return (
              <Modal
                name="Alterar Senha"
                children={
                  <EditPassword
                    schema={updatePasswordSchema}
                    send={updatePassword}
                  />
                }
                isDelete
              />
            );
          case "email":
            return (
              <Modal
                name="Alterar Email"
                elemInfo={elemSecond?.email}
                children={
                  <EditText
                    idField="email"
                    name="Email"
                    placeholder="Digite aqui o novo email"
                    schema={emailSchema}
                    send={updateEmailUser}
                  />
                }
              />
            );
          case "phone":
            return (
              <Modal
                name="Alterar Contato"
                elemInfo={elemSecond?.phoneNumber}
                children={
                  <EditText
                    idField="phoneNumber"
                    name="Contato"
                    placeholder="Digite aqui o novo contato"
                    schema={phoneNumberSchema}
                    send={updatePhoneUser}
                  />
                }
              />
            );
        }
        return (
          <Modal name="Editar Perfil" children={<InfoEdit elem={elem} />} />
        );
      case "delete":
        switch (second) {
          case "email":
            return (
              <Modal
                name="Deseja realmente deletar esse email?"
                elemInfo={elemSecond?.email}
                children={<DeleteCard />}
                isDelete
              />
            );
          case "phone":
            return (
              <Modal
                name="Deseja realmente deletar esse contato?"
                elemInfo={elemSecond?.phoneNumber}
                children={<DeleteCard />}
                isDelete
              />
            );
        }
        return (
          <Modal
            name="Deseja realmente deletar sua conta?"
            children={<DeleteCard />}
            isDelete
          />
        );
    }
  } else if (route === "contact") {
    switch (option) {
      case "create":
        switch (second) {
          case "email":
            return (
              <Modal
                name="Adicionar Email"
                children={
                  <EditText
                    idField="email"
                    name="Email"
                    placeholder="Digite aqui o email"
                    schema={emailSchema}
                    send={createEmailContact}
                  />
                }
              />
            );
          case "phone":
            return (
              <Modal
                name="Adicionar Contato"
                children={
                  <EditText
                    idField="phoneNumber"
                    name="Contato"
                    placeholder="Digite aqui o contato"
                    schema={phoneNumberSchema}
                    send={createPhoneContact}
                  />
                }
              />
            );
        }
        return <Modal name="Adicionar Contato" children={<AddContato />} />;
      case "update":
        switch (second) {
          case "fullName":
            return (
              <Modal
                name="Alterar Nome Completo"
                elemInfo={elem?.fullName}
                children={
                  <EditText
                    idField="fullName"
                    name="Nome Completo"
                    placeholder="Digite aqui o novo nome"
                    schema={fullNameSchema}
                    send={updateContact}
                  />
                }
              />
            );
          case "email":
            return (
              <Modal
                name="Alterar Email"
                elemInfo={elemSecond?.email}
                children={
                  <EditText
                    idField="email"
                    name="Email"
                    placeholder="Digite aqui o novo email"
                    schema={emailSchema}
                    send={updateEmailContact}
                  />
                }
              />
            );
          case "phone":
            return (
              <Modal
                name="Alterar Contato"
                elemInfo={elemSecond?.phoneNumber}
                children={
                  <EditText
                    idField="phoneNumber"
                    name="Contato"
                    placeholder="Digite aqui o novo contato"
                    schema={phoneNumberSchema}
                    send={updatePhoneContact}
                  />
                }
              />
            );
        }
        return (
          <Modal name="Editar Contato" children={<InfoEdit elem={elem} />} />
        );
      case "delete":
        switch (second) {
          case "email":
            return (
              <Modal
                name="Deseja realmente deletar esse email?"
                elemInfo={elemSecond?.email}
                children={<DeleteCard />}
                isDelete
              />
            );
          case "phone":
            return (
              <Modal
                name="Deseja realmente deletar esse contato?"
                elemInfo={elemSecond?.phoneNumber}
                children={<DeleteCard />}
                isDelete
              />
            );
        }
        return (
          <Modal
            name="Deseja realmente deletar esse contato?"
            elemInfo={elem?.fullName}
            children={<DeleteCard />}
            isDelete
          />
        );
    }
  }

  return <></>;
};

export default Options;
