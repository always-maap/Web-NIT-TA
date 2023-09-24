import type { Request, Response } from "express";

import { IAuthService } from "IAM.Application";
import { SignUpRequest } from "IAM.Contracts";
import { SignUpMapper } from "../Mapper/SignUpMapper";

export class AuthController {
  private readonly _authService: IAuthService;

  constructor(authService: IAuthService) {
    this._authService = authService;
  }

  public SignUp = (req: Request, res: Response) => {
    const body: SignUpRequest = req.body;
    const mappedParam = SignUpMapper(body);
    res.status(201).send(this._authService.HandleSignUp(mappedParam));
  };

  public SignIn(req: Request, res: Response) {
    res.send(this._authService.HandleSignIn());
  }
}
