import { DomainEvent } from "./DomainEvent";

export interface IEntity {
  AddDomainEvent(domainEvent: DomainEvent): void;
  GetDomainEvents(): DomainEvent[];
  ClearDomainEvents(): void;
}
