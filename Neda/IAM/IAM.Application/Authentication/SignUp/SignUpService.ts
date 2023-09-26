import * as uuid from "uuid";

import { User } from "IAM.Domain";
import { IUserRepository } from "../../Common/IUserRepository";
import { IJwtTokenGenerator } from "../../Common/IJwtTokenGenerator";
import { SignUpParam } from "./SignUpParam";
import { ISignUpService } from "./ISignUpService";
import { AuthenticationResult } from "../AuthenticationResult";

export class SignUpService implements ISignUpService {
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;
  private readonly _userRepository: IUserRepository;

  constructor(
    jwtTokenGenerator: IJwtTokenGenerator,
    userRepository: IUserRepository
  ) {
    this._jwtTokenGenerator = jwtTokenGenerator;
    this._userRepository = userRepository;
  }

  public Handle(params: SignUpParam) {
    const user = User.Create(
      uuid.v4(),
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
}
