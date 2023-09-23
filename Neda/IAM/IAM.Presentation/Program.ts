import express from "express";

import { MapRoutes } from "./Controllers";

const app = express();
const port = process.env.PORT || 3000;

app.use(MapRoutes());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
