import { AuthenticationResult } from "../AuthenticationResult";
import { IVerifyCodeService } from "./IVerifyCodeService";
import {
  IJwtTokenGenerator,
  IUserRepository,
  IVerifyCodeCacheProvider,
} from "IAM.Application";
import { VerifyCodeParam } from "./VerifyCodeParam";

export class VerifyCodeService implements IVerifyCodeService {
  private readonly _verifyCodeCache: IVerifyCodeCacheProvider;
  private readonly _userRepository: IUserRepository;
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;

  constructor(
    verifyCodeCache: IVerifyCodeCacheProvider,
    jwtTokenGenerator: IJwtTokenGenerator,
    userRepository: IUserRepository
  ) {
    this._verifyCodeCache = verifyCodeCache;
    this._jwtTokenGenerator = jwtTokenGenerator;
    this._userRepository = userRepository;
  }

  async Handle(params: VerifyCodeParam) {
    const verifyCode = await this._verifyCodeCache.get(params.Phone);
    if (verifyCode !== params.Code) {
      throw new Error("login first");
    }

    const user = await this._userRepository.GetUserByPhone(params.Phone);
    const token = this._jwtTokenGenerator.GenerateToken(user);

    const authenticationResult: AuthenticationResult = {
      Token: token,
      User: user,
    };
    return authenticationResult;
  }
}
