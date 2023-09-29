import { SmsRequest } from "./SmsRequest";

export interface ISmsSender {
  SendSms(request: SmsRequest): void;
}
