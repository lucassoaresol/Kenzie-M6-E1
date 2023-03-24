import AppError from '../../errors/AppError';
import { IContactUpdateRequest } from '../../interfaces/contacts.interface';
import prisma from '../../prisma';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const updateContactService = async (
  contactData: IContactUpdateRequest,
  contactId: string,
  userId: string,
) => {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        contacts: { update: { where: { id: contactId }, data: contactData } },
      },
      include: { contacts: true },
    });

    return await contactResponserSerializer.validate(user.contacts[0], {
      stripUnknown: true,
    });
  } catch {
    throw new AppError('contact not found', 404);
  }
};

export default updateContactService;
