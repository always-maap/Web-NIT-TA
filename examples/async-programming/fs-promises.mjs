import fs from "fs/promises";

async function readTempFile() {
  console.log("before read");
  const data = await fs.readFile("./temp.txt", "utf8");
  console.log(data);
  console.log("after read");
}

readTempFile();
