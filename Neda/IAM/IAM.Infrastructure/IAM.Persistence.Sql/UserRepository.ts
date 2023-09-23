import { IUserRepository } from "IAM.Application";
import { User } from "IAM.Domain";

export class UserRepository implements IUserRepository {
  private static readonly _users: User[] = [];

  Add(user: User): void {
    UserRepository._users.push(user);
  }
}
