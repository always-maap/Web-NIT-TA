export interface IEventBus {
  Start(): Promise<void>;
  Publish(): Promise<void>;
}
