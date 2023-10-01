import { IDomainEvent } from "../Framework.Domain/IDomainEvent";
import { OutboxItem } from "./OutboxItem";

export interface IOutboxRepository {
  AddMany(domainEvent: IDomainEvent[]): Promise<void>;
  UpdateItems(outboxItems: OutboxItem[]): Promise<void>;
  GetUnpublished(): Promise<OutboxItem[]>;
}
