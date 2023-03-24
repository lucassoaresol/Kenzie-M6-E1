import prisma from '../../prisma';
import { contactResponserSerializer } from '../../serializers/contact.serializes';

const retrieveContactService = async (contactId: string) => {
  const contact = await prisma.contact.findUnique({
    where: { id: contactId },
    include: { listEmail: true, listPhoneNumber: true },
  });

  return await contactResponserSerializer.validate(contact, {
    stripUnknown: true,
  });
};

export default retrieveContactService;
