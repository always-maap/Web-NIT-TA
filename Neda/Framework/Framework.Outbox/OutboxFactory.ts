import { IDomainEvent } from "../Framework.Domain/IDomainEvent";
import { OutboxItem } from "./OutboxItem";

export function OutboxFactory(events: IDomainEvent[]): OutboxItem[] {
  return events.map((event) => new OutboxItem(event));
}
