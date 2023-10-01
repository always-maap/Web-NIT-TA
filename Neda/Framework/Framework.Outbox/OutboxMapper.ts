import { OutboxModel } from "./OutboxConfiguration";
import { OutboxItem } from "./OutboxItem";

export function OutboxMapper(outbox: OutboxModel): OutboxItem {
  return {
    Id: outbox.Id,
    Body: outbox.Body,
    Type: outbox.Type,
    CreatedAt: outbox.CreatedAt,
    PublishedAt: outbox.PublishedAt,
  };
}
