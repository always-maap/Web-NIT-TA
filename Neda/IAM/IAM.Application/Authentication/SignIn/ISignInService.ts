import { SignInParam } from "./SignInParam";

export interface ISignInService {
  Handle(params: SignInParam): Promise<void>;
}
