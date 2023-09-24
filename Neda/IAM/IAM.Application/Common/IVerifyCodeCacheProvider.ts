export interface IVerifyCodeCacheProvider {
  set(code: number): boolean;
  get(phone: string): number;
}
