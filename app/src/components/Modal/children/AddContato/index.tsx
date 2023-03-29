import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { VscAdd, VscRemove } from "react-icons/vsc";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Text from "@/components/Input/Text";
import ErrorsMessage from "@/components/Input/ErrorsMessage";
import { StyledAddContato } from "./styles";
import { StyledList } from "@/components/pages/Register/styles";
import { useContactContext } from "@/contexts/ContactContext";

const schema = yup.object({
  fullName: yup.string().required("Nome Completo é obrigatório"),
  listEmail: yup
    .array()
    .of(
      yup.object({
        email: yup
          .string()
          .email("Email deve ser um email válido")
          .required("Email é obrigatório"),
      })
    )
    .required()
    .min(1),
  listPhoneNumber: yup
    .array()
    .of(
      yup.object({
        phoneNumber: yup
          .string()
          .matches(/^[0-9]+$/, { message: "Digite apenas números" })
          .required("Contato é obrigatório"),
      })
    )
    .required()
    .min(1),
});

const AddContato = () => {
  const { createContact } = useContactContext();
  let message: (string | undefined)[] = [];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      listEmail: [{ email: "" }],
      listPhoneNumber: [{ phoneNumber: "" }],
    },
    resolver: yupResolver(schema),
  });

  const listEmail = useFieldArray({
    control,
    name: "listEmail",
  } as never);
  const listPhoneNumber = useFieldArray({
    control,
    name: "listPhoneNumber",
  } as never);

  return (
    <StyledAddContato>
      <form onSubmit={handleSubmit(createContact)}>
        <Input
          id="fullName"
          name="Nome Completo"
          placeholder="Digite aqui o nome completo"
          register={register("fullName")}
          errors={errors}
        />
        <StyledList>
          <li>
            <div>
              <h3>Lista de Email</h3>
              <button
                type="button"
                onClick={() => {
                  listEmail.append({ email: "" });
                }}
              >
                <VscAdd />
              </button>
            </div>
          </li>
          {listEmail.fields.map((item, index) => {
            if (errors.listEmail) {
              message[0] = errors.listEmail[index]?.email?.message;
            }
            return (
              <li key={item.id}>
                <div>
                  <Text
                    placeholder="Digite aqui o email"
                    register={register(`listEmail.${index}.email`)}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      listEmail.remove(index);
                    }}
                  >
                    <VscRemove />
                  </button>
                </div>
                <ErrorsMessage message={message[0]} />
              </li>
            );
          })}
        </StyledList>
        <StyledList>
          <li>
            <div>
              <h3>Lista de Contato</h3>
              <button
                type="button"
                onClick={() => {
                  listPhoneNumber.append({ phoneNumber: "" });
                }}
              >
                <VscAdd />
              </button>
            </div>
          </li>
          {listPhoneNumber.fields.map((item, index) => {
            if (errors.listPhoneNumber) {
              message[1] = errors.listPhoneNumber[index]?.phoneNumber?.message;
            }
            return (
              <li key={item.id}>
                <div>
                  <Text
                    placeholder="Digite aqui o contato"
                    register={register(`listPhoneNumber.${index}.phoneNumber`)}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      listPhoneNumber.remove(index);
                    }}
                  >
                    <VscRemove />
                  </button>
                </div>
                <ErrorsMessage message={message[1]} />
              </li>
            );
          })}
        </StyledList>
        <Button name="Adicionar" type="submit" caseButton="primary" />
      </form>
    </StyledAddContato>
  );
};

export default AddContato;
