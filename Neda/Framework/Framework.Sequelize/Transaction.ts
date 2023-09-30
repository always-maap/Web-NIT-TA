import { Sequelize } from "sequelize-typescript";
import { Transaction as TTransaction } from "sequelize";

import { ITransaction } from "../Framework.Domain/ITransaction";

export class Transaction implements ITransaction {
  private readonly _connection: Sequelize;
  private _transaction!: TTransaction;

  constructor(connection: Sequelize) {
    this._connection = connection;
  }

  async Start() {
    const transaction = await this._connection.transaction();
    this._transaction = transaction;
    return transaction;
  }

  async Commit() {
    await this._transaction.commit();
  }

  async Abort() {
    this._transaction.rollback();
  }

  GetTransaction() {
    return this._transaction;
  }
}
