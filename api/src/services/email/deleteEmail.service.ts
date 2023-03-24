import AppError from '../../errors/AppError';
import prisma from '../../prisma';

const deleteEmailService = async (emailId: string) => {
  try {
    await prisma.listEmail.delete({
      where: { id: emailId },
    });
  } catch {
    throw new AppError('email not found', 404);
  }
};

export default deleteEmailService;
