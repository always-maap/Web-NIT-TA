import { User } from "IAM.Domain";

export interface IUserRepository {
  Add(user: User): void;
  GetUserByPhone(phone: string): Promise<User>;
}
