import { AuthService } from "IAM.Application";
import {
  CreateRedisDatabase,
  JWTTokenGenerator,
  UserRepository,
  VerifyCodeCacheProvider,
} from "IAM.Infrastructure";
import { AuthController } from "./Controllers/AuthController";
import { UserController } from "./Controllers/UserController";

export const InjectDependencies = async () => {
  const redisClient = await CreateRedisDatabase();
  const jwtTokenGenerator = new JWTTokenGenerator();
  const userRepository = new UserRepository();
  const verifyCodeCacheProvider = new VerifyCodeCacheProvider(redisClient);
  const authService = new AuthService(
    jwtTokenGenerator,
    userRepository,
    verifyCodeCacheProvider
  );
  const authController = new AuthController(authService);

  const userController = new UserController();

  return { authController, userController };
};
