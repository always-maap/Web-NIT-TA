import { Op } from "sequelize";

import { ITransaction } from "../Framework.Domain/ITransaction";
import { IDomainEvent } from "../Framework.Domain/IDomainEvent";
import { IOutboxRepository } from "./IOutboxRepository";
import { OutboxModel } from "./OutboxConfiguration";
import { OutboxFactory } from "./OutboxFactory";
import { OutboxMapper } from "./OutboxMapper";
import { OutboxItem } from "./OutboxItem";

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

  async UpdateItems(outboxItems: OutboxItem[]) {
    const itemIdsToUpdate = outboxItems.map((o) => o.Id);

    await OutboxModel.update(
      { PublishedAt: new Date().toUTCString() },
      {
        where: {
          Id: {
            [Op.in]: itemIdsToUpdate,
          },
        },
      }
    );
  }

  async GetUnpublished() {
    const outboxItems = await OutboxModel.findAll({
      where: { PublishedAt: null },
    });

    return outboxItems.map((outboxItem) => OutboxMapper(outboxItem));
  }
}
