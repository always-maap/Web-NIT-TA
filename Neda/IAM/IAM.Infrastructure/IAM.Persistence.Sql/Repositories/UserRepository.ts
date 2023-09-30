import { Transaction as TTransaction } from "sequelize";
import { ITransaction } from "@neda/framework";

import { IUserRepository } from "IAM.Application";
import { User } from "IAM.Domain";
import { UserModel } from "../Configurations/UserConfiguration";
import { UserMapper } from "../Mapper/UserMapper";

export class UserRepository implements IUserRepository {
  private readonly _transaction: ITransaction;

  constructor(transaction: ITransaction) {
    this._transaction = transaction;
  }

  async Add(user: User) {
    const mappedUser = UserMapper(user);

    await UserModel.create(mappedUser, {
      transaction: this._transaction.GetTransaction(),
    });
  }

  async GetUserByPhone(phone: string) {
    const user = await UserModel.findOne({ where: { Phone: phone } });

    return user as any;
  }
}
