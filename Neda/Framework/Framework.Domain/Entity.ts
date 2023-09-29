import { DomainEvent } from "./DomainEvent";
import { IEntity } from "./IEntity";

export abstract class Entity implements IEntity {
  private _domainEvents: DomainEvent[];

  protected constructor() {
    this._domainEvents = [];
  }

  public AddDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public GetDomainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  public ClearDomainEvents(): void {
    this._domainEvents = [];
  }
}
