import { AuthenticationResult } from "../AuthenticationResult";
import { SignUpParam } from "./SignUpParam";

export interface ISignUpService {
  Handle(params: SignUpParam): Promise<AuthenticationResult>;
}
