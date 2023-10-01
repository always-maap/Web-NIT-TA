import { DomainEvent } from "../Framework.Domain";

export class OutboxItem {
  Id: string;
  Type: string;
  Body: string;
  CreatedAt: string;
  PublishedAt: string | null;

  constructor(event: DomainEvent) {
    this.Id = event.EventId;
    this.CreatedAt = event.Timestamp;
    this.Type = event.EventId;
    this.Body = JSON.stringify(event);
    this.PublishedAt = null;
  }
}
