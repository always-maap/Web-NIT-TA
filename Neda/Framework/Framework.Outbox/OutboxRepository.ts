import { ITransaction } from "../Framework.Domain/ITransaction";
import { IDomainEvent } from "../Framework.Domain/IDomainEvent";
import { IOutboxRepository } from "./IOutboxRepository";
import { OutboxModel } from "./OutboxConfiguration";
import { OutboxFactory } from "./OutboxFactory";

export class OutboxRepository implements IOutboxRepository {
  private readonly _transaction: ITransaction;

  constructor(transaction: ITransaction) {
    this._transaction = transaction;
  }

  async AddMany(domainEvent: IDomainEvent[]) {
    const outboxItems = OutboxFactory(domainEvent);

    await OutboxModel.bulkCreate(outboxItems, {
      transaction: this._transaction.GetTransaction(),
    });
  }
}
