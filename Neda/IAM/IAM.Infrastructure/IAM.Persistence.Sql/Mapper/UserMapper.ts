import { User } from "IAM.Domain";
import { UserAttributes } from "../Configurations/UserConfiguration";

export function UserMapper(user: User): UserAttributes {
  return {
    Id: user.Id,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Phone: user.Phone,
    Gender: user.Gender,
    Picture: user.Picture,
    CreatedAt: user.CreatedAt.toString(),
    UpdatedAt: user.UpdatedAt.toString(),
  };
}
