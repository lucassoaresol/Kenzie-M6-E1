import AppError from '../../errors/AppError';
import prisma from '../../prisma';

const deletePhoneService = async (
  phoneId: string,
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
                listPhoneNumber: {
                  delete: { id: phoneId },
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
          listPhoneNumber: {
            delete: { id: phoneId },
          },
        },
      });
    }
  } catch {
    throw new AppError('phone not found', 404);
  }
};

export default deletePhoneService;
