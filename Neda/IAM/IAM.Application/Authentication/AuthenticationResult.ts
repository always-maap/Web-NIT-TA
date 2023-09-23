import { User } from "IAM.Domain";

export interface AuthenticationResult {
  User: User;
  Token: string;
}
