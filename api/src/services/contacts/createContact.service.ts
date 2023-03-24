import { IContactRequest } from '../../interfaces/contacts.interface';
import prisma from '../../prisma';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const createContactService = async (
  { fullName, listEmail, listPhoneNumber }: IContactRequest,
  userId: string,
) => {
  const contact = await prisma.contact.create({
    data: {
      fullName,
      userId,
      listEmail: { createMany: { data: listEmail } },
      listPhoneNumber: { createMany: { data: listPhoneNumber } },
    },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await contactResponserSerializer.validate(contact, {
    stripUnknown: true,
  });
};

export default createContactService;
