import type { Request, Response } from "express";
import { IAuthService } from "IAM.Application";

export class AuthController {
  private readonly _authService: IAuthService;

  constructor(authService: IAuthService) {
    this._authService = authService;
  }

  public SignUp(req: Request, res: Response) {
    console.log("called", this._authService);
    return this._authService.HandleSignUp();
  }

  public SignIn(req: Request, res: Response) {
    this._authService.HandleSignIn();
    res.send("bye, TypeScript Express!");
  }
}
