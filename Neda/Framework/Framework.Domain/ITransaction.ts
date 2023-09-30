import { Transaction as TTransaction } from "sequelize";

export interface ITransaction {
  Start(): Promise<TTransaction>;
  Commit(): Promise<void>;
  Abort(): Promise<void>;
  GetTransaction(): TTransaction;
}
