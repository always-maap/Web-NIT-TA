import { IUserRepository } from "IAM.Application";
import { User } from "IAM.Domain";
import { users } from "../Configurations/UserConfiguration";
import { db } from "../Configurations/IAMContext";
import { UserMapper } from "../Mapper/UserMapper";

export class UserRepository implements IUserRepository {
  async Add(user: User) {
    const mappedUser = UserMapper(user);

    await db.insert(users).values(mappedUser);
  }
}
