const fs = require("fs");

// Create new File
// fs.writeFileSync("read.txt", "Welcome to my channel")

// fs.writeFileSync("read.txt", "Thapa technical, Welcome to my channel")

// fs.appendFileSync("read.txt", " How are you I am Fine Thank you");

// const duf_data = fs.readFileSync("read.txt");
// console.log(duf_data.toString());

fs.renameSync("read.txt", "readWrite.txt");