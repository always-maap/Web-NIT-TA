import Kavenegar from "kavenegar";

import { ISmsSender } from "./ISmsSender";
import { SmsRequest } from "./SmsRequest";

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
      (_, status, message) => {
        if (status !== 200) {
          console.log(status, message);
        }
      }
    );
  }
}
