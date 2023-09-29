import { ISmsSender } from "./ISmsSender";
import { SmsRequest } from "./SmsRequest";

export class FakeSmsSender implements ISmsSender {
  SendSms(request: SmsRequest) {
    console.log(
      `the verification code for ${request.phoneNumber} is ${request.message}`
    );
  }
}
