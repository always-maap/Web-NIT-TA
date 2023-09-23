import { AuthService } from "IAM.Application";
import { JWTTokenGenerator, UserRepository } from "IAM.Infrastructure";
import { AuthController } from "./Controllers/AuthController";
import { UserController } from "./Controllers/UserController";

export const InjectDependencies = () => {
  console.log("second");
  const jwtTokenGenerator = new JWTTokenGenerator();
  const userRepository = new UserRepository();
  const authService = new AuthService(jwtTokenGenerator, userRepository);
  const authController = new AuthController(authService);

  const userController = new UserController();

  return { authController, userController };
};
