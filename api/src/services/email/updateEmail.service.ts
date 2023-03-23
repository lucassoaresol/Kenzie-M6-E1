import { IEmailRequest } from '../../interfaces/email.interfaces';
import prisma from '../../prisma';
import { emailResponserSerializer } from '../../serializers/email.serializes';

const updateEmailService = async (
  emailData: IEmailRequest,
  emailId: string,
) => {
  const email = await prisma.listEmail.update({
    where: { id: emailId },
    data: emailData,
  });

  return await emailResponserSerializer.validate(email, {
    stripUnknown: true,
  });
};

export default updateEmailService;
