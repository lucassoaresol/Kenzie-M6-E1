import { IEmailRequest } from '../../interfaces/email.interfaces';
import prisma from '../../prisma';
import { emailResponserSerializer } from '../../serializers/email.serializes';

const createEmailService = async (
  emailData: IEmailRequest,
  userId?: string,
) => {
  if (userId) {
    const email = await prisma.listEmail.create({
      data: { ...emailData, userId: userId },
    });

    return await emailResponserSerializer.validate(email, {
      stripUnknown: true,
    });
  }
};

export default createEmailService;
