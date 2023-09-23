import { AuthenticationResult } from "./AuthenticationResult";

export interface IAuthService {
  HandleSignUp(): AuthenticationResult;
  HandleSignIn(): void;
}
