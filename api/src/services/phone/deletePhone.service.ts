import AppError from '../../errors/AppError';
import prisma from '../../prisma';

const deletePhoneService = async (phoneId: string) => {
  try {
    await prisma.listPhoneNumber.delete({
      where: { id: phoneId },
    });
  } catch {
    throw new AppError('phone not found', 404);
  }
};

export default deletePhoneService;
