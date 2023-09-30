import { Transaction as TTransaction } from "sequelize";

export interface IUnitOfWork {
  Begin(): Promise<TTransaction>;
  Commit(): Promise<void>;
  Rollback(): Promise<void>;
}
