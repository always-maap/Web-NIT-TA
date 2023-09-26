import { IVerifyCodeCacheProvider } from "IAM.Application";
import { IRedisClient } from "../Configurations/RedisDatabase";
import { VerifyCodeCacheKey } from "./VerifyCodeCacheKey";

export class VerifyCodeCacheProvider implements IVerifyCodeCacheProvider {
  private readonly _cache: IRedisClient;

  constructor(cache: IRedisClient) {
    this._cache = cache;
  }

  async set(phone: string, code: number) {
    const resp = await this._cache.set(VerifyCodeCacheKey(phone), code, {
      EX: 5 * 60,
    });
    return resp === "OK";
  }

  async get(phone: string): Promise<number | null> {
    const resp = await this._cache.get(VerifyCodeCacheKey(phone));
    return resp ? Number(resp) : null;
  }
}
