const fs = require("node:fs");

try {
  const fd = fs.openSync("./JavaScript/FS Module/Sample.txt", "r");
  const data = fs.readFileSync(fd, "utf8");
  console.log("File contents:", data);
  fs.closeSync(fd);
} catch (err) {
  console.error(err);
}
