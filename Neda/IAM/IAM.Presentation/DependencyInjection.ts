import { OutboxRepository } from "@neda/framework";

import { InjectInfraDependencies } from "IAM.Infrastructure";
import { AuthController } from "./Controllers/AuthController";
import { UserController } from "./Controllers/UserController";
import {
  VerifyCodeService,
  SignInService,
  SignUpService,
} from "IAM.Application";

export const InjectDependencies = async () => {
  const {
    unitOfWork,
    fakeSmsSender,
    jwtTokenGenerator,
    userRepository,
    verifyCodeCacheProvider,
  } = await InjectInfraDependencies();

  const outboxRepository = new OutboxRepository();

  const signInService = new SignInService(
    userRepository,
    verifyCodeCacheProvider,
    fakeSmsSender
  );

  const signUpService = new SignUpService(
    jwtTokenGenerator,
    userRepository,
    outboxRepository,
    unitOfWork
  );

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
