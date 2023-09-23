import { InjectDependencies } from "IAM.Presentation/DI";
import { Router } from "express";

export const MapRoutes = () => {
  console.log("first");
  const { authController, userController } = InjectDependencies();
  console.log("third");
  const routes = Router();

  routes.post("/sign-up", authController.SignUp);
  routes.post("/sign-in", authController.SignIn);

  routes.get("/user", userController.Get);

  return routes;
};
