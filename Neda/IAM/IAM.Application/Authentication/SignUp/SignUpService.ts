import * as uuid from "uuid";
import { IOutboxRepository, IUnitOfWork } from "@neda/framework";

import { User } from "IAM.Domain";
import { IUserRepository } from "../../Common/IUserRepository";
import { IJwtTokenGenerator } from "../../Common/IJwtTokenGenerator";
import { SignUpParam } from "./SignUpParam";
import { ISignUpService } from "./ISignUpService";
import { AuthenticationResult } from "../AuthenticationResult";

export class SignUpService implements ISignUpService {
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;
  private readonly _unitOfWork: IUnitOfWork;
  private readonly _userRepository: IUserRepository;
  private readonly _outboxRepository: IOutboxRepository;

  constructor(
    jwtTokenGenerator: IJwtTokenGenerator,
    userRepository: IUserRepository,
    outboxRepository: IOutboxRepository,
    unitOfWork: IUnitOfWork
  ) {
    this._jwtTokenGenerator = jwtTokenGenerator;
    this._userRepository = userRepository;
    this._outboxRepository = outboxRepository;
    this._unitOfWork = unitOfWork;
  }

  public async Handle(params: SignUpParam) {
    await this._unitOfWork.Begin();

    const user = User.Create(
      uuid.v4(),
      params.FirstName,
      params.LastName,
      params.Phone,
      params.Gender,
      params.Picture
    );

    try {
      await this._userRepository.Add(user);
      await this._outboxRepository.AddMany(user.GetDomainEvents());
      await this._unitOfWork.Commit();
    } catch (e) {
      console.log(e);
      await this._unitOfWork.Rollback();
    }

    const token = this._jwtTokenGenerator.GenerateToken(user);
    const authenticationResult: AuthenticationResult = {
      Token: token,
      User: user,
    };
    return authenticationResult;
  }
}
