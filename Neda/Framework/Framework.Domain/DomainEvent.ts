import * as uuid from "uuid";

import { IDomainEvent } from "./IDomainEvent";

export class DomainEvent implements IDomainEvent {
  EventId: string;
  Timestamp: string;

  protected constructor() {
    this.EventId = uuid.v4();
    this.Timestamp = new Date().toString();
  }
}
