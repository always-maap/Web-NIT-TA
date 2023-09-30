import { ITransaction } from "../Framework.Domain/ITransaction";
import { IUnitOfWork } from "../Framework.Domain/IUnitOfWork";

export class UnitOfWork implements IUnitOfWork {
  private readonly _transaction: ITransaction;

  constructor(transaction: ITransaction) {
    this._transaction = transaction;
  }

  async Begin() {
    return await this._transaction.Start();
  }

  async Commit() {
    await this._transaction.Commit();
  }

  async Rollback() {
    await this._transaction.Abort();
  }
}
