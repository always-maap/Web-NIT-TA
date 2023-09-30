import { Transaction as TTransaction } from "sequelize";

import { User } from "IAM.Domain";

export interface IUserRepository {
  Add(user: User): Promise<void>;
  GetUserByPhone(phone: string): Promise<User>;
}
