const fs = require("node:fs/promises");
const filePath = "./JavaScript/FS Module/Sample.txt";

async function writeValue() {
  try {
    const content = "I am writing here something 2.0";
    await fs.writeFile(filePath, content);
  } catch (err) {
    console.log(err);
  }
}

async function readValue() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log("File contents:", data);
  } catch (err) {
    console.log(err);
  }
}

writeValue();
readValue();
