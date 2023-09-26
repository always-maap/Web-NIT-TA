import { User } from "IAM.Domain";
import { users } from "../Configurations/UserConfiguration";

type InsertUser = typeof users.$inferInsert;

export function UserMapper(user: User): InsertUser {
  return {
    Id: user.Id,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Phone: user.Phone,
    Gender: user.Gender,
    Picture: user.Picture,
    CreatedAt: user.CreatedAt,
    UpdatedAt: user.UpdatedAt,
  };
}
