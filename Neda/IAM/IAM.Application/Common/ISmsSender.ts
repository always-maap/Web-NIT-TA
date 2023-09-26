export interface SmsRequest {
  phoneNumber: string;
  message: string;
  template: string;
}

export interface ISmsSender {
  SendSms(request: SmsRequest): void;
}
