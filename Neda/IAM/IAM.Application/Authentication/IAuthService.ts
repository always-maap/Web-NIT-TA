import { AuthenticationResult } from "./AuthenticationResult";
import { SignUpParam } from "./SignUpParam";

export interface IAuthService {
  HandleSignUp(params: SignUpParam): AuthenticationResult;
  HandleSignIn(): void;
}
