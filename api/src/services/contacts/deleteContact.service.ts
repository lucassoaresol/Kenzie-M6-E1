import prisma from '../../prisma';

const deleteContactService = async (contactId: string) => {
  await prisma.contact.delete({
    where: { id: contactId },
  });
};

export default deleteContactService;
