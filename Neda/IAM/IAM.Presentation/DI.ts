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
import { SmsSender } from "IAM.Infrastructure/IAM.Notification.Sms/SmsSender";

export const InjectDependencies = async () => {
  const redisClient = await CreateRedisDatabase();
  const jwtTokenGenerator = new JWTTokenGenerator();
  const userRepository = new UserRepository();
  const verifyCodeCacheProvider = new VerifyCodeCacheProvider(redisClient);
  const smsSender = new SmsSender();

  const signInService = new SignInService(
    userRepository,
    verifyCodeCacheProvider,
    smsSender
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
