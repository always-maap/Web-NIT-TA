import { SignUpParam, VerifyCodeParam } from "IAM.Application";
import { SignUpRequest, VerifyCodeRequest } from "IAM.Contracts";

export function VerifyCodeMapper(req: VerifyCodeRequest): VerifyCodeParam {
  return {
    Phone: req.phone,
    Code: req.code,
  };
}
