import Kavenegar from "kavenegar";

import { ISmsSender, SmsRequest } from "IAM.Application";

export class SmsSender implements ISmsSender {
  SendSms(request: SmsRequest) {
    var api = Kavenegar.KavenegarApi({
      apikey: process.env.SMS_SRV_KEY!,
    });

    return api.VerifyLookup(
      {
        receptor: request.phoneNumber,
        token: request.message,
        template: request.template,
      },
      (_, status) => {
        console.log(status);
      }
    );
  }
}
