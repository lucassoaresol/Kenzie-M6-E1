import AppError from '../../errors/AppError';
import prisma from '../../prisma';

const deleteContactService = async (contactId: string, userId: string) => {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        contacts: { delete: { id: contactId } },
      },
    });
  } catch {
    throw new AppError('contact not found', 404);
  }
};

export default deleteContactService;
