import { User } from "IAM.Domain";
import { IUserRepository } from "IAM.Application";
import { IJwtTokenGenerator } from "../Common/IJwtTokenGenerator";
import { IAuthService } from "./IAuthService";
import { AuthenticationResult } from "./AuthenticationResult";

export class AuthService implements IAuthService {
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;
  private readonly _userRepository: IUserRepository;

  constructor(
    jwtTokenGenerator: IJwtTokenGenerator,
    userRepository: IUserRepository
  ) {
    this._jwtTokenGenerator = jwtTokenGenerator;
    this._userRepository = userRepository;
  }

  public HandleSignUp() {
    const user = User.Create(
      "firstName",
      "lastName",
      "password",
      "gender",
      "picture"
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
}
