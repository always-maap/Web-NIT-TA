import { User } from "IAM.Domain";
import { IUserRepository } from "../Common/IUserRepository";
import { IJwtTokenGenerator } from "../Common/IJwtTokenGenerator";
import { IVerifyCodeCacheProvider } from "../Common/IVerifyCodeCacheProvider";
import { IAuthService } from "./IAuthService";
import { AuthenticationResult } from "./AuthenticationResult";
import { SignUpParam } from "./SignUpParam";

export class AuthService implements IAuthService {
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;
  private readonly _userRepository: IUserRepository;
  private readonly _verifyCodeCache: IVerifyCodeCacheProvider;

  constructor(
    jwtTokenGenerator: IJwtTokenGenerator,
    userRepository: IUserRepository,
    verifyCodeCache: IVerifyCodeCacheProvider
  ) {
    this._jwtTokenGenerator = jwtTokenGenerator;
    this._userRepository = userRepository;
    this._verifyCodeCache = verifyCodeCache;
  }

  public HandleSignUp(params: SignUpParam) {
    const user = User.Create(
      params.FirstName,
      params.LastName,
      params.Phone,
      params.Gender,
      params.Picture
    );

    this._userRepository.Add(user);

    const token = this._jwtTokenGenerator.GenerateToken(user);
    const authenticationResult: AuthenticationResult = {
      Token: token,
      User: user,
    };
    return authenticationResult;
  }

  public HandleSignIn() {}

  public HandleVerifyCode() {
    this._verifyCodeCache.get("");
  }

  private createRandomCode() {}
}
