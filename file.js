const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// Sync..
// fs.writeFileSync("./test.txt", "Hey there");

// Async
// fs.writeFile("./test.txt", "Hey there from Async", (err) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err) => (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", "copyTest.txt");

// fs.cpSync("./test.txt", "./testCopy.txt");

// delete, unlink

// fs.unlinkSync("./testCopy.txt");

// console.log(fs.statSync("./test.txt"));

// fs.writeFileSync("./readME.md", "Mastering on the nodejs")
fs.writeFileSync("./.gitignore", "node_modules")
