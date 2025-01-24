const path = require("node:path");
const notes = "./JavaScript/FS Module/Sample.txt";
console.log("Directory name:", path.dirname(notes)); // /users/joe
console.log("Base name:", path.basename(notes)); // notes.txt
console.log("Extension name:", path.extname(notes)); // .txt
