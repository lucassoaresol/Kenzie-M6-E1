import AppError from '../../errors/AppError';
import { IContactRequest } from '../../interfaces/contacts.interface';
import prisma from '../../prisma';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const updateContactService = async (
  contactData: IContactRequest,
  contactId: string,
) => {
  try {
    const contact = await prisma.contact.update({
      where: { id: contactId },
      data: contactData,
    });

    return await contactResponserSerializer.validate(contact, {
      stripUnknown: true,
    });
  } catch {
    throw new AppError('contact not found', 404);
  }
};

export default updateContactService;
