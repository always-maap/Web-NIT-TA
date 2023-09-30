import { Transaction as TTransaction } from "sequelize";

import { IDomainEvent } from "../Framework.Domain/IDomainEvent";

export interface IOutboxRepository {
  AddMany(
    domainEvent: IDomainEvent[],
    transaction: TTransaction
  ): Promise<void>;
}
