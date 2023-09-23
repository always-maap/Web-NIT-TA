import { User } from "IAM.Domain";

export interface IJwtTokenGenerator {
  GenerateToken(user: User): string;
}
