import { Sequelize } from "sequelize-typescript";
import { OutboxModel } from "@neda/framework";

import { UserModel } from "./UserConfiguration";

export function CreateDbConnection(): Sequelize {
  return new Sequelize(process.env.PG_CONN_STR!, {
    models: [UserModel, OutboxModel],
  });
}
