import {
  FakeSmsSender,
  Transaction,
  UnitOfWork,
  OutboxRepository,
} from "@neda/framework";

import { JWTTokenGenerator } from "./IAM.Authentication/JwtTokenGenerator";
import { CreateRedisDatabase } from "./IAM.Cache.Redis/Configurations/RedisDatabase";
import { VerifyCodeCacheProvider } from "./IAM.Cache.Redis/VerifyCode/VerifyCodeCacheProvider";
import { UserRepository } from "./IAM.Persistence.Sql/Repositories/UserRepository";
import { CreateDbConnection } from "./IAM.Persistence.Sql/Configurations/IAMContext";

export const InjectInfraDependencies = async () => {
  const dbConnection = CreateDbConnection();

  const transaction = new Transaction(dbConnection);
  const unitOfWork = new UnitOfWork(transaction);

  const redisClient = await CreateRedisDatabase();
  const jwtTokenGenerator = new JWTTokenGenerator();

  const userRepository = new UserRepository(transaction);

  const outboxRepository = new OutboxRepository(transaction);

  const verifyCodeCacheProvider = new VerifyCodeCacheProvider(redisClient);
  const fakeSmsSender = new FakeSmsSender();

  return {
    unitOfWork,
    redisClient,
    jwtTokenGenerator,
    userRepository,
    outboxRepository,
    verifyCodeCacheProvider,
    fakeSmsSender,
  };
};
