import { IContactRequest } from '../../interfaces/contacts.interface';
import prisma from '../../prisma';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const createContactService = async (
  contactData: IContactRequest,
  userId: string,
) => {
  const contact = await prisma.contact.create({
    data: { ...contactData, userId },
  });

  return await contactResponserSerializer.validate(contact, {
    stripUnknown: true,
  });
};

export default createContactService;
