import { IDomainEvent } from "../Framework.Domain/IDomainEvent";

export interface IOutboxRepository {
  AddMany(domainEvent: IDomainEvent[]): Promise<void>;
}
