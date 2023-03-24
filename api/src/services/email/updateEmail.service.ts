import AppError from '../../errors/AppError';
import { IEmailRequest } from '../../interfaces/email.interfaces';
import prisma from '../../prisma';
import { emailResponserSerializer } from '../../serializers/email.serializes';

const updateEmailService = async (
  emailData: IEmailRequest,
  emailId: string,
) => {
  try {
    const email = await prisma.listEmail.update({
      where: { id: emailId },
      data: emailData,
    });

    return await emailResponserSerializer.validate(email, {
      stripUnknown: true,
    });
  } catch {
    throw new AppError('email not found', 404);
  }
};

export default updateEmailService;
