import Kavenegar from "kavenegar";

import { ISmsSender } from "./ISmsSender";
import { SmsRequest } from "./SmsRequest";

export class SMSSender implements ISmsSender {
  SendSms(request: SmsRequest) {
    var api = Kavenegar.KavenegarApi({
      apikey:
        "4A756A716B4C70464D6D495A47463733414F752B454F45613776456B474D486F77775432376F4E515853733D",
    });
    api.Send(
      {
        message: "خدمات پیام کوتاه کاوه نگار",
        sender: "1000689696",
        receptor: "09197532677",
      },
      () => {
        console.log("worked");
      }
    );
  }
}
