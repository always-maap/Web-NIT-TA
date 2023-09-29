import { FakeSmsSender } from "@neda/framework";

import {
  CreateRedisDatabase,
  JWTTokenGenerator,
  UserRepository,
  VerifyCodeCacheProvider,
} from "IAM.Infrastructure";
import { AuthController } from "./Controllers/AuthController";
import { UserController } from "./Controllers/UserController";
import {
  VerifyCodeService,
  SignInService,
  SignUpService,
} from "IAM.Application";

export const InjectDependencies = async () => {
  const redisClient = await CreateRedisDatabase();
  const jwtTokenGenerator = new JWTTokenGenerator();
  const userRepository = new UserRepository();
  const verifyCodeCacheProvider = new VerifyCodeCacheProvider(redisClient);
  const fakeSmsSender = new FakeSmsSender();

  const signInService = new SignInService(
    userRepository,
    verifyCodeCacheProvider,
    fakeSmsSender
  );

  const signUpService = new SignUpService(jwtTokenGenerator, userRepository);

  const verifyService = new VerifyCodeService(
    verifyCodeCacheProvider,
    jwtTokenGenerator,
    userRepository
  );

  const authController = new AuthController(
    signUpService,
    signInService,
    verifyService
  );

  const userController = new UserController();

  return { authController, userController };
};
