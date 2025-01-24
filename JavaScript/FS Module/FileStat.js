const fs = require("node:fs");
fs.stat("./JavaScript/FS Module/Sample.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Is file:", stats.isFile()); // true
  console.log("Is directory:", stats.isDirectory()); // false
  console.log("Is symbolic link:", stats.isSymbolicLink()); // false
  console.log("Size:", stats.size); // 1024000 //= 1MB
});
