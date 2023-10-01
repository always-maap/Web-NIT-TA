import { OutboxWorker } from "@neda/framework";
import schedule from "node-schedule";

import { InjectInfraDependencies } from "IAM.Infrastructure";

/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/
export async function UseWorkers() {
  const { outboxRepository, unitOfWork } = await InjectInfraDependencies();
  const outboxWorker = new OutboxWorker(outboxRepository, unitOfWork);

  schedule.scheduleJob("*/5 * * * * *", async () => {
    await outboxWorker.Invoke();
  });
}
