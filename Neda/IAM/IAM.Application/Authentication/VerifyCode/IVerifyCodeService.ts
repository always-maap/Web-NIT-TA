import { AuthenticationResult } from "../AuthenticationResult";
import { VerifyCodeParam } from "./VerifyCodeParam";

export interface IVerifyCodeService {
  Handle(params: VerifyCodeParam): Promise<AuthenticationResult>;
}
