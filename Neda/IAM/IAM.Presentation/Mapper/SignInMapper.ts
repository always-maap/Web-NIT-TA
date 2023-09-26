import { SignInParam } from "IAM.Application";
import { SignInRequest, SignUpRequest } from "IAM.Contracts";

export function SignInMapper(req: SignInRequest): SignInParam {
  return {
    Phone: req.phone,
  };
}
