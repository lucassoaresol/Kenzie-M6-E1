import AppError from '../../errors/AppError';
import prisma from '../../prisma';

const deleteEmailService = async (
  emailId: string,
  userId: string,
  contactId?: string,
) => {
  try {
    if (contactId) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          contacts: {
            update: {
              where: { id: contactId },
              data: {
                listEmail: {
                  delete: { id: emailId },
                },
              },
            },
          },
        },
      });
    } else {
      await prisma.user.update({
        where: { id: userId },
        data: {
          listEmail: {
            delete: { id: emailId },
          },
        },
      });
    }
  } catch {
    throw new AppError('email not found', 404);
  }
};

export default deleteEmailService;
