import { Optional } from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";

export interface OutboxAttributes {
  Id: string;
  Type: string;
  Body: string;
  CreatedAt: string;
  PublishedAt: string | null;
}

type UserCreationAttributes = Optional<OutboxAttributes, "PublishedAt">;

@Table({ tableName: "outbox", createdAt: false, updatedAt: false })
export class OutboxModel extends Model<
  OutboxAttributes,
  UserCreationAttributes
> {
  @Column({ type: DataType.STRING, field: "id", primaryKey: true })
  Id!: string;

  @Column({ type: DataType.STRING, field: "type", allowNull: false })
  Type!: string;

  @Column({ type: DataType.TEXT, field: "body", allowNull: false })
  Body!: string;

  @Column({ type: DataType.STRING, field: "created_at", allowNull: false })
  CreatedAt!: string;

  @Column({ type: DataType.STRING, field: "published_at" })
  PublishedAt!: string;
}
