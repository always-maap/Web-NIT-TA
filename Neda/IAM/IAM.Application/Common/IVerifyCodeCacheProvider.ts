export interface IVerifyCodeCacheProvider {
  set(phone: string, code: number): Promise<boolean>;
  get(phone: string): Promise<number | null>;
}
