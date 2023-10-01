import { Optional } from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";

export interface UserAttributes {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: string;
  Picture: string;
  CreatedAt: string;
  UpdatedAt: string;
}

type UserCreationAttributes = Optional<UserAttributes, "Picture">;

@Table({ tableName: "users", createdAt: false, updatedAt: false })
export class UserModel extends Model<UserAttributes, UserCreationAttributes> {
  @Column({ type: DataType.STRING, field: "id", primaryKey: true })
  Id!: string;

  @Column({ type: DataType.STRING, field: "first_name", allowNull: false })
  FirstName!: string;

  @Column({ type: DataType.STRING, field: "last_name", allowNull: false })
  LastName!: string;

  @Column({ type: DataType.STRING, field: "phone", allowNull: false })
  Phone!: string;

  @Column({ type: DataType.STRING, field: "gender", allowNull: false })
  Gender!: string;

  @Column({ type: DataType.STRING, field: "picture" })
  Picture!: string;

  @Column({ type: DataType.STRING, field: "created_at" })
  CreatedAt!: string;

  @Column({ type: DataType.STRING, field: "updated_at" })
  UpdatedAt!: string;
}
