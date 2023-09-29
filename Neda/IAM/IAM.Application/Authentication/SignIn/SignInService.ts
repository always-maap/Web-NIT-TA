import { ISmsSender } from "@neda/framework";

import { SignInParam } from "./SignInParam";
import { ISignInService } from "./ISignInService";
import { IUserRepository } from "../../Common/IUserRepository";
import { IVerifyCodeCacheProvider } from "../../Common/IVerifyCodeCacheProvider";

export class SignInService implements ISignInService {
  private readonly _userRepository: IUserRepository;
  private readonly _verifyCodeCache: IVerifyCodeCacheProvider;
  private readonly _smsSender: ISmsSender;

  constructor(
    userRepository: IUserRepository,
    verifyCodeCache: IVerifyCodeCacheProvider,
    smsSender: ISmsSender
  ) {
    this._userRepository = userRepository;
    this._verifyCodeCache = verifyCodeCache;
    this._smsSender = smsSender;
  }

  public async Handle(params: SignInParam) {
    const x = await this._userRepository.GetUserByPhone(params.Phone);
    const verifyCode = this._createVerifyCode();
    this._verifyCodeCache.set(params.Phone, verifyCode);
    this._smsSender.SendSms({
      template: "verify",
      phoneNumber: params.Phone,
      message: verifyCode.toString(),
    });
  }

  private _createVerifyCode() {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
