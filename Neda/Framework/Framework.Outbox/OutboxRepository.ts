import { IDomainEvent } from "../Framework.Domain/IDomainEvent";
import { IOutboxRepository } from "./IOutboxRepository";
import { OutboxModel } from "./OutboxConfiguration";
import { OutboxFactory } from "./OutboxFactory";

export class OutboxRepository implements IOutboxRepository {
  async AddMany(domainEvent: IDomainEvent[]) {
    const outboxItems = OutboxFactory(domainEvent);

    await OutboxModel.bulkCreate(outboxItems);
  }
}
