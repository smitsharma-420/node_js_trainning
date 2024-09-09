//  ***Async Crud Operations*** 

const fs = require("fs");

//  ***Comment out the Code lines and Run it***

// create folder in Async
// fs.mkdir("crud", (err) => {
//     console.log("Folder Created");
// })

// create new file
// fs.writeFile("crud/test.txt", "Hello Everyone", (err) => {
//     console.log("New File is created")
// })

// append data in file
// fs.appendFile("crud/test.txt", " How are you", (err) => {
//     console.log("Data is Added");
// })

// read data
// fs.readFile("crud/test.txt", "utf-8", (err, data) => {
//     console.log(data);
// })

// rename file
// fs.rename("crud/test.txt", "crud/example.txt", (err) => {
//     console.log("File name is Chnaged");
// })

// delete file
// fs.unlink("crud/example.txt", (err) => {
//     console.log("File is Deleted");
// })

// delete folder 
// fs.rmdir("crud", (err) => {
//     console.log("The Folder is Deleted")
// })