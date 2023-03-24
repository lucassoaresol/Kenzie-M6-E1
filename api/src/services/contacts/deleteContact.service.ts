import AppError from '../../errors/AppError';
import prisma from '../../prisma';

const deleteContactService = async (contactId: string) => {
  try {
    await prisma.contact.delete({
      where: { id: contactId },
    });
  } catch {
    throw new AppError('contact not found', 404);
  }
};

export default deleteContactService;
