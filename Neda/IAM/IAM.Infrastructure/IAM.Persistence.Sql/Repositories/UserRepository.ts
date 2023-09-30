import { Transaction as TTransaction } from "sequelize";

import { IUserRepository } from "IAM.Application";
import { User } from "IAM.Domain";
import { UserModel } from "../Configurations/UserConfiguration";
import { UserMapper } from "../Mapper/UserMapper";

export class UserRepository implements IUserRepository {
  async Add(user: User, transaction: TTransaction) {
    const mappedUser = UserMapper(user);

    await UserModel.create(mappedUser, {
      transaction,
    });
  }

  async GetUserByPhone(phone: string) {
    const user = await UserModel.findOne({ where: { Phone: phone } });

    return user as any;
  }
}
