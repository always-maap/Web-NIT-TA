import { IUnitOfWork } from "../Framework.Domain/IUnitOfWork";
import { IEventBus } from "./IEventBus";
import { IOutboxRepository } from "./IOutboxRepository";

export class OutboxWorker {
  private readonly _eventBus!: IEventBus;
  private readonly _outboxRepository: IOutboxRepository;
  private readonly _unitOfWork: IUnitOfWork;

  constructor(outboxRepository: IOutboxRepository, unitOfWork: IUnitOfWork) {
    this._outboxRepository = outboxRepository;
    this._unitOfWork = unitOfWork;
  }

  async Invoke() {
    const items = await this._outboxRepository.GetUnpublished();

    if (items.length === 0) {
      return;
    }

    try {
      await this._unitOfWork.Begin();

      await this._outboxRepository.UpdateItems(items);

      await this._unitOfWork.Commit();
    } catch (e) {
      await this._unitOfWork.Rollback();
    }
  }
}
