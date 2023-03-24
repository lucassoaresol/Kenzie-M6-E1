import { IPhoneRequest } from '../../interfaces/phone.interfaces';
import prisma from '../../prisma';
import { phoneResponserSerializer } from '../../serializers/phone.serializes';

const createPhoneService = async (
  phoneData: IPhoneRequest,
  userId?: string,
) => {
  if (userId) {
    const phone = await prisma.listPhoneNumber.create({
      data: { ...phoneData, userId: userId },
    });

    return await phoneResponserSerializer.validate(phone, {
      stripUnknown: true,
    });
  }
};

export default createPhoneService;
