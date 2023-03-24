import AppError from '../../errors/AppError';
import { IPhoneRequest } from '../../interfaces/phone.interfaces';
import prisma from '../../prisma';
import { phoneResponserSerializer } from '../../serializers/phone.serializes';

const updatePhoneService = async (
  phoneData: IPhoneRequest,
  phoneId: string,
) => {
  try {
    const phone = await prisma.listPhoneNumber.update({
      where: { id: phoneId },
      data: phoneData,
    });

    return await phoneResponserSerializer.validate(phone, {
      stripUnknown: true,
    });
  } catch {
    throw new AppError('phone not found', 404);
  }
};

export default updatePhoneService;
