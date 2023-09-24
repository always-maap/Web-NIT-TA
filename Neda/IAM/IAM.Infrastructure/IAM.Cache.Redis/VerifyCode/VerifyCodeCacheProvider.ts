import { IVerifyCodeCacheProvider } from "IAM.Application";
import { IRedisClient } from "../Configurations/RedisDatabase";

export class VerifyCodeCacheProvider implements IVerifyCodeCacheProvider {
  private readonly _cache: IRedisClient;

  constructor(cache: IRedisClient) {
    this._cache = cache;
  }

  set(code: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(phone: string): number {
    throw new Error("Method not implemented.");
  }
}
